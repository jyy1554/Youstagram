import React from 'react'
import './css/index.css'

function Detail() {
  return (
    <div className='feed-detail'>
      <div className='bg'></div>
      <div className='wrapper'>
        <div className='close'>
          <img src="/assets/feed/close.svg" alt="닫기" />
        </div>
        <div className='main-image'>

        </div>
        <div className='contents'>
          <div className='feed-content'>
            <div className='top'>
              <div className='profile-image'></div>
              <div className='feed-desc'>
                <div className='nickname txt-bold'>
                  해도디
                </div>
                <div className='timestamp'>
                  8:15PM, yesterday
                </div>
              </div>
            </div>

            <div className='body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt explicabo optio commodi rem? Expedita tempora temporibus nulla assumenda hic incidunt repellat, quaerat voluptates tenetur eligendi architecto provident fugit qui!
            </div>

            <div className='bottom'>
              <div className='like'>
                <div className='asset'>
                  <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className='title txt-bold'>
                  25k
                </div>
              </div>
              <div className='comment'>
                <div className='asset'>
                  <img src="/assets/feed/comment.svg" alt="댓글" />
                </div>
                <div className='title txt-bold'>
                  2k
                </div>
              </div>
            </div>

          </div>
          <div className='feed-comments'>
            <div className='comment-form comment'>
              <div className='top'>
                <div className='left'>
                  <div className='profile-image'></div>
                  <div className='feed-desc'>
                    <div className='nickname txt-bold'>
                      해도디
                    </div>
                    <div className='timestamp'>
                      8:15PM, yesterday
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='like'>
                    <div className='asset'>
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className='title txt-bold'>
                      34k
                    </div>
                  </div>
                  <div className='reply-btn'>
                    답글
                  </div>
                </div>
              </div>
              <div className='body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores expedita unde id animi nobis, labore cum distinctio tenetur dicta quae, esse accusamus! Nemo, saepe dolores quam voluptatum et vel.
              </div>
            </div>

            <div className='comment-form reply'>
              <div className='top'>
                <div className='left'>
                  <div className='profile-image'></div>
                  <div className='feed-desc'>
                    <div className='nickname txt-bold'>
                      해도디
                    </div>
                    <div className='timestamp'>
                      8:15PM, yesterday
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='like'>
                    <div className='asset'>
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className='title txt-bold'>
                      34k
                    </div>
                  </div>
                  <div className='reply-btn'>
                    답글
                  </div>
                </div>
              </div>
              <div className='body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores expedita unde id animi nobis, labore cum distinctio tenetur dicta quae, esse accusamus! Nemo, saepe dolores quam voluptatum et vel.
              </div>
            </div>

            <div className='comment-form comment'>
              <div className='top'>
                <div className='left'>
                  <div className='profile-image'></div>
                  <div className='feed-desc'>
                    <div className='nickname txt-bold'>
                      해도디
                    </div>
                    <div className='timestamp'>
                      8:15PM, yesterday
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='like'>
                    <div className='asset'>
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className='title txt-bold'>
                      34k
                    </div>
                  </div>
                  <div className='reply-btn'>
                    답글
                  </div>
                </div>
              </div>
              <div className='body'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque asperiores expedita unde id animi nobis, labore cum distinctio tenetur dicta quae, esse accusamus! Nemo, saepe dolores quam voluptatum et vel.
              </div>
            </div>
          </div>
          <div className='feed-write-comment'>
            <div className='profile-image'>

            </div>
            <div className='write-comment'>
              <input type="text" placeholder='댓글을 남겨주세요!' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
