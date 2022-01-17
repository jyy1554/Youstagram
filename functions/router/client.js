const firebaseApp = require('../config/firebaseModule')
const express = require('express')
const cors = require('cors')

const Fauth = firebaseApp.auth()
const Fdatabase = firebaseApp.database()

const router = express.Router()
router.use(cors())
router.options('*',cors)

router.post('/user/new', (req,res,next) => {
  const {
    email,
    password,
    nickname
  } = req.body
  
  Fauth.createUser({
    email,
    password,
    displayName : nickname
  }).then(credential => {
    const {uid} = credential

    //유저 프로필 데이터베이스를 만들어서 데이터베이스에 저장하기

    Promise.all([
      // users/{uid}/profile/email,timestamp,nickname경로에 저장할끄
      Fdatabase.ref(`users/${uid}/profile`).set({
        email,
        nickname,
        timestamp : Date.now()
      }),
      // statics/nicknames 경로를 만들어 public하게 중복 닉네임 체크할 수 있도록 할꺼
      Fdatabase.ref(`statics/nicknames/${uid}`).set(nickname)
    ]).then(() => {
      res.status(200).json({
        msg : '유저가 만들어 졌습니다.'
      })
    }).catch(err => {
      res.status(400).json({
        err
      })
    })
    
  }).catch(err => {
    res.status(400).json ({
      err
    })
  })
})

router.post('/feed/new', (req,res,next) => {
  const {
    feed,
    profile, 
    timestamp
  } = req.body

  const {uid} = profile

  Fdatabase.ref('feed').push({
    feed,
    profile,
    timestamp
  }).then(snapshot => {
    const fid = snapshot.key // 무작위의 키가 만들어진 후에 그 키를 반환
    Fdatabase.ref(`users/${uid}/feed`).push({fid}).then(() => {
      res.status(200).json({
        msg : '피드가 올라갔습니다.'
      })
    }).catch(err => {
      res.status(400).json({
        err
      })
    }) // 유저가 본인의 글을 가져올때 필요합니다.

  }).catch(err => {
    res.status(400).json({
      err
    })
  })
  
})

router.post('/user/profile/image', (req,res,next) => {
  const {uid} = req.body;

  Fdatabase.ref(`users/${uid}/profile/image`).once('value', snapshot => {
    if (snapshot.exists()) {
      res.status(200).json({
        image : snapshot.val()
      })
    } else {
      res.status(200).json({
        image : undefined
      })
    }
  }).catch(err => {
    res.status(400).json({
      err
    })
  })
})

router.post('/user/profile/quote', (req,res,next) => {
  const {uid} = req.body;

  Fdatabase.ref(`users/${uid}/profile/quote`).once('value', snapshot => {
    if (snapshot.exists()) {
      res.status(200).json({
        quote : snapshot.val()
      })
    } else {
      res.status(200).json({
        quote : undefined
      })
    }
  }).catch(err => {
    res.status(400).json({
      err
    })
  })
})

router.get('/helloworld', (req, res, next) => {
  res.json({
    msg: 'hellowold'
  })
})

module.exports = router