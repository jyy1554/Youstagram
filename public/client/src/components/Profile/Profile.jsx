import firebaseApp from '@config/firebaseApp';
import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import './css/index.css'

const Fdatabase = firebaseApp.database();
const Fstorage = firebaseApp.storage();

function Profile() {
  const [userImage, setUserImage] = useState(undefined);
  const [quote, setQuote] = useState(undefined);
  const [feeds, setFeeds] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [recommendFriends, setRecommendFriends] = useState([]);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const session = useSelector(state => state.auth.session);
  const history = useHistory();
  const param = useParams();
  const location = useLocation();

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
  const __getUserProfileFromServer = useCallback((uid) => {
    let url = '/user/profile/image';

    fetch(url, {
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
      .then(({image}) => {
        setUserImage(image)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //서버에서 정보 불러오기
  const __getUserQuoteFromServer = useCallback((uid) => {
    let url = '/user/profile/quote';

    fetch(url, {
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
        console.log(quote);
        setQuote(quote);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const __getUserFeed = useCallback((uid) => {
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
      .then(({ feed, msg }) => {
        console.log(msg);
        const totalLikeCount = feed.reduce((prev, next) => {
          return prev + next.feed.like;
        }, 0);
        console.log(totalLikeCount);
        setLikeCount(totalLikeCount);
        setFeeds(feed.reverse());
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const __getRecommendFriends = useCallback(() => {
    if (session) {
      const {uid} = session;
      let url = '/friends/recommend';

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
        .then(({friends, msg}) => {
          setRecommendFriends(friends);
          console.log(friends);
          console.log(msg);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }, [session]);

  const __classifyFriend = useCallback(() => {
    const {uid} = param;
    if (uid) {
      setIsMyProfile(false);
    } else {
      setIsMyProfile(true);
    }
  }, [param]);

  useEffect(() => {
    __classifyFriend();
    return () => {};
  }, [__classifyFriend]);

  useEffect(() => {
    if (session) {
      let uuid = '';
      if (isMyProfile) {
        const {uid} = session;
        uuid = uid;
        __getRecommendFriends();
      } else {
        const {uid} = param;
        uuid = uid;
      }
      __getUserFeed(uuid);
      __getUserProfileFromServer(uuid);
      __getUserQuoteFromServer(uuid);
    }
    return () => {};
  }, [
    __getUserProfileFromServer,
    __getUserQuoteFromServer,
    __getUserFeed,
    __getRecommendFriends,
    isMyProfile,
    session,
    param
  ]);

  return (
    <div className='profile'>
      <div className='wrapper'>
        <div className='info'>
          <div
            className='profile-image'
            style={userImage && { backgroundImage : `url(${userImage})` }}
          >
            {isMyProfile && <input type='file' onChange={__getImage}/>}
          </div>
          <div className='profile-desc'>
            {isMyProfile ? (
              <div className='nickname txt-bold'>
                {session ? session.displayName : '해도디'}
              </div>
            ) : (
              <div className='nickname txt-bold'>
                {location.state ? location.state.nickname : '해도디'}
              </div>
            )}
            { isMyProfile ? (
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
                    {quote}
                  </div>
                  <div className='follow-btn txt-bold'>
                    팔로우하기
                  </div>
                </>
            )}
          </div>
        </div>

        <div className='feed-images'>
          {feeds
            .filter(i => i.feed.image)
            .map((item, idx) => {
              const {feed: {image}} = item;
              return (
                <div className='feed-image' key={idx}>
                  <img src={image} alt="피드 이미지" />
                </div>
              );
            })}
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
              <div className='count'>{likeCount}</div>
            </div>
            <div className='desc'>
              <div className='title txt-bold'>팔로워</div>
              <div className='count'>0</div>
            </div>
            <div className='desc'>
              <div className='title txt-bold'>포스트</div>
              <div className='count'>{feeds.length}</div>
            </div>
            <div className='desc'>
              <div className='title txt-bold'>친구</div>
              <div className='count'>0</div>
            </div>

            {isMyProfile && (
              <div className='my-friends'>
                <div className='title txt-bold'>
                  추천 친구
                </div>
                <ul className='friend-list-wrapper'>
                  {recommendFriends.map((item,idx) => {
                    const {uid, data: {profile : {image,nickname}}} = item;
                    return (
                      <li
                        className='friend'
                        key={idx}
                        onClick={() => history.push(`/profile/${uid}`, {
                          nickname
                        })}
                      >
                        <div className='profile-image' 
                          style={image && {backgroundImage:`url(${image})`}}
                        ></div>
                        <div className='nickname txt-bold'>
                          {nickname}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
