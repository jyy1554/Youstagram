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

router.get('/helloworld', (req, res, next) => {
  res.json({
    msg: 'hellowold'
  })
})

module.exports = router