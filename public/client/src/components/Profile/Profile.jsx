import firebaseApp from '@config/firebaseApp';
import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Feed from '../Feed/Feed';
import './css/index.css'

const Fdatabase = firebaseApp.database();
const Fstorage = firebaseApp.storage();

function Profile() {
  const [userImage, setUserImage] = useState(undefined);
  const [quote, setQuote] = useState(undefined);
  const [feeds, setFeeds] = useState([]);
  const session = useSelector(state => state.auth.session);

  const __uploadImageToDatabase = useCallback(
    (uid, url) => {
      Fdatabase.ref(`users/${uid}/profile/image`).set(url)
      .then(() => {
        alert('프로필 사진을 업로드 완료');
      }).catch(err => {
        console.log(err);
      });
    },
    [],
  )

  const __uploadImageToStorage = useCallback(
    (data) => {
      if (session) {
        const {uid} = session;
        Fstorage.ref(`users/${uid}/profile.jpg`).putString(data.split(",")[1], 'base64', {
          contentType : 'image/jpg'
        }).then(snapshot => {
          snapshot.ref
          .getDownloadURL()
          .then(url => {
            __uploadImageToDatabase(uid, url);
            alert('프로필 사진을 스토리지로 업로드 했습니다.');
          }).catch(err => {
            console.log(err);
          })
        }).catch(err => {
          console.log(err);
        });
      }
      Fstorage.ref()
    }, [session, __uploadImageToDatabase]);

  const __getImage = useCallback(
    (e) => {
      const filelist = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        console.log(e.target.result); //base64 type image source
        setUserImage(e.target.result);
        __uploadImageToStorage(e.target.result);
      }

      reader.readAsDataURL(filelist);

      console.log(filelist);
    }, [__uploadImageToStorage]);

  const __onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (session && quote) {
        const {uid} = session;

        Fdatabase.ref(`users/${uid}/profile/quote`).set(quote)
        .then(() => {
          alert('한줄평이 변경되었습니다.');
        }).catch(err => {
          console.log(err);
        })
      }
      console.log('submit!');
    }, [session, quote]);

  //서버에서 정보 불러오기
  const __getUserProfileFromServer = useCallback(
    () => {
      if (session) {
        const {uid} = session;
        let url = '/user/profile/image';

        fetch(url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Allow-Control-Access-Origin': '*',
            },
            body: JSON.stringify({
              uid
            })
          })
            .then(res => res.json())
            .then(({image}) => {setUserImage(image)})
            .catch(err => {
              console.log(err);
            });
      }
    },
    [session]);

  //서버에서 정보 불러오기
  const __getUserQuoteFromServer = useCallback(
    () => {
      if (session) {
        const {uid} = session;
        let url = '/user/profile/quote';

        fetch(url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Allow-Control-Access-Origin': '*',
            },
            body: JSON.stringify({
              uid
            })
          })
            .then(res => res.json())
            .then(({quote}) => {
              setQuote(quote)
            })
            .catch(err => {
              console.log(err);
            });
      }
    },
    [session]);

  const __getUserFeed = useCallback(() => {
    if(session) {
      const {uid} = session;
      let url = '/user/feed';

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Allow-Control-Access-Origin': '*'
        },
        body: JSON.stringify({
          uid
        })
      })
        .then((res) => res.json())
        .then(({feed, msg}) => {
          console.log(msg);
          setFeeds(feed.reverse());
      }).catch(err => {
        console.log(err);
      });
    }
  }, [session]);

  useEffect(() => {
    __getUserFeed();
    __getUserProfileFromServer();
    __getUserQuoteFromServer();
    return () => {};
  }, [__getUserProfileFromServer, __getUserQuoteFromServer, __getUserFeed]);

  return (
    <div className='profile'>
      <div className='wrapper'>
        <div className='info'>
          <div
            className='profile-image'
            style={userImage && { backgroundImage : `url(${userImage})` }}
          >
            {true && <input type='file' onChange={__getImage}/>}
          </div>
          <div className='profile-desc'>
            <div className='nickname txt-bold'>
              {session ? session.displayName : '해도디'}
            </div>
            { true ? (
                <form className='quote' onSubmit={__onSubmit}>
                  <textarea
                    defaultValue={quote}
                    placeholder='자신의 한줄평을 입력해주세요'
                    onBlur={(e) => setQuote(e.target.value)}
                  ></textarea>
                  <button type='submit' className='follow-btn txt-bold'>
                    저장하기
                  </button>
                </form>
              ) : (
                 <>
                  <div className='quote'>
                    Btw, SpaceX is no longer planning to upgrade Falcon 9 second stage for reusability.
                    Accelerating BFR instead. New design is very exciting! Delightfully counter-intuitive.
                  </div>
                  <div className='follow-btn txt-bold'>
                    팔로우하기
                  </div>
                </>
            )}
          </div>
        </div>

        <div className='feed-images'>
          <div className='feed-image'>
            <img src="https://api.time.com/wp-content/uploads/2014/05/mrwallpapers.jpg" alt="" />
          </div>
          <div className='feed-image'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxoqFxUu0n0l8gFDHx2GxkIICbe9Bu5k8qw&usqp=CAU" alt="" />
          </div>
          <div className='feed-image'>
            <img src="https://cdna.artstation.com/p/assets/images/images/024/538/892/large/pixel-jeff-version2.jpg?1582740652" alt="" />
          </div>
          <div className='feed-image'>
            <img src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" alt="" />
          </div>
          <div className='feed-image'>
            <img src="https://r1.ilikewallpaper.net/iphone-wallpapers/download-105173/worm's-eye-view-of-sewer-lid_200.jpg" alt="" />
          </div>
          <div className='feed-image'>
            <img src="https://lh3.googleusercontent.com/z5vvamGMwczpSEuBlG91aKA8H-V0pDLZXyL97_w5JSjxj6jLPoQ08tJnszqwkUyiqsU" alt="" />
          </div>
          <div className='feed-image'>
            <img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </div>
        </div>

        <div className='profile-contents'>
          <div className='feed-list'>

            <div className='title txt-bold'>
              작성한 글
            </div>
            <div className='feeds'>
              {feeds.map((item,idx) => {
                return <Feed key={idx} {...item} />;
              })}
            </div>
          </div>

          <div className='profile-info-desc'>
            <div className='desc'>
              <div className='title txt-bold'>좋아요</div>
              <div className='count'>739,000</div>
            </div>
            <div className='desc'>
              <div className='title txt-bold'>팔로워</div>
              <div className='count'>2,539,000</div>
            </div>
            <div className='desc'>
              <div className='title txt-bold'>포스트</div>
              <div className='count'>320</div>
            </div>
            <div className='desc'>
              <div className='title txt-bold'>친구</div>
              <div className='count'>236,320</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
