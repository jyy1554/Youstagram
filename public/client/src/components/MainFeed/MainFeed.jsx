import React from 'react'
import './css/index.css'

function MainFeed() {
  return (
    <div className='mainfeed'>
      <div className='wrapper'>
        <div className='feed-list'>
          <div className='write-feed'>
            <div className='profile-image'>

            </div>
            <div className='inp'>
              <input type="text" placeholder='오늘 무슨일이 있었나요?' />
            </div>
            <div className='get-image'>
              <label htmlFor="get-image-input">
                <img src="/assets/main/add-image.svg" alt="이미지 추가하기" />
              </label>
              <input id='get-image-input' type="file" />
            </div>
          </div>


          <div className='feed'>
            <div className='top'>
              <div className='profile-image'>

              </div>
              <div className='profile-desc'>
                <div className='nickname txt-bold'>
                  해도디
                </div>
                <div className='timestamp'>
                  8:15 pm, yesterday
                </div>
              </div>
            </div>
            <div className='contents'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus quaerat voluptatum corrupti expedita doloribus ullam accusantium, obcaecati, eveniet aliquam asperiores rem. Quo, autem corrupti animi cumque iste minima nulla.
            </div>
            <div className='bottom'>
              <div className='like'>
                <div className='asset'>
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className='count txt-bold'>25k</div>
              </div>
              <div className='comment'>
                <div className='asset'>
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className='count txt-bold'>2k</div>
              </div>
            </div>
          </div>

          <div className='feed'>
            <div className='top'>
              <div className='profile-image'>

              </div>
              <div className='profile-desc'>
                <div className='nickname txt-bold'>
                  해도디
                </div>
                <div className='timestamp'>
                  8:15 pm, yesterday
                </div>
              </div>
            </div>
            <div className='contents'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus quaerat voluptatum corrupti expedita doloribus ullam accusantium, obcaecati, eveniet aliquam asperiores rem. Quo, autem corrupti animi cumque iste minima nulla.
              <div className='image'></div>
            </div>
            <div className='bottom'>
              <div className='like'>
                <div className='asset'>
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className='count txt-bold'>25k</div>
              </div>
              <div className='comment'>
                <div className='asset'>
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className='count txt-bold'>2k</div>
              </div>
            </div>
          </div>

          <div className='feed'>
            <div className='top'>
              <div className='profile-image'>

              </div>
              <div className='profile-desc'>
                <div className='nickname txt-bold'>
                  해도디
                </div>
                <div className='timestamp'>
                  8:15 pm, yesterday
                </div>
              </div>
            </div>
            <div className='contents'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus quaerat voluptatum corrupti expedita doloribus ullam accusantium, obcaecati, eveniet aliquam asperiores rem. Quo, autem corrupti animi cumque iste minima nulla.
            </div>
            <div className='bottom'>
              <div className='like'>
                <div className='asset'>
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className='count txt-bold'>25k</div>
              </div>
              <div className='comment'>
                <div className='asset'>
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className='count txt-bold'>2k</div>
              </div>
            </div>
          </div>

          <div className='feed'>
            <div className='top'>
              <div className='profile-image'>

              </div>
              <div className='profile-desc'>
                <div className='nickname txt-bold'>
                  해도디
                </div>
                <div className='timestamp'>
                  8:15 pm, yesterday
                </div>
              </div>
            </div>
            <div className='contents'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus quaerat voluptatum corrupti expedita doloribus ullam accusantium, obcaecati, eveniet aliquam asperiores rem. Quo, autem corrupti animi cumque iste minima nulla.
              <div className='image'></div>
            </div>
            <div className='bottom'>
              <div className='like'>
                <div className='asset'>
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className='count txt-bold'>25k</div>
              </div>
              <div className='comment'>
                <div className='asset'>
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className='count txt-bold'>2k</div>
              </div>
            </div>
          </div>

        </div>
        <div className='friend-list'>
          <div className='my-profile'>
            <div className='profile-image'>

            </div>
            <div className='nickname txt-bold'>
              해도디
            </div>
          </div>
          <div className='my-friends'>
            <div className='title txt-bold'>
              나의 친구
            </div>
            <ul className='friend-list-wrapper'>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
              <li className='friend'>
                <div className='profile-image'>

                </div>
                <div className='nickname txt-bold'>
                  Mickey_lover
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFeed
