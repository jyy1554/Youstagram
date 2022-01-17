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
            { true ? (
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
