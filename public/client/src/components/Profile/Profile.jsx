import React from 'react'
import './css/index.css'

function Profile() {
  return (
    <div className='profile'>
      <div className='wrapper'>
        <div className='info'>
          <div className='profile-image'>

          </div>
          <div className='profile-desc'>
            <div className='nickname txt-bold'>
              해도디
            </div>
            {
              false ? (
                <div className='quote'>
                  <textarea placeholder='자신의 한줄평을 입력해주세요'></textarea>
                </div>
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
      </div>
    </div>
  )
}

export default Profile
