import React, { Fragment, useEffect, useState } from 'react'
import { getPostOfCategory } from '../../util/api'
import { Style } from './style.js'
import Link from 'next/link'
const SideBar = ({ id }) => {
    const [postState, setPostState] = useState([])
    const [textSearch, setTextSearch] = useState('')
    useEffect(async () => {
        try {
            const res = await getPostOfCategory(id, textSearch)
            console.log(id, res)
            setPostState(res)
        } catch (error) {
            console.log(error)
        }
    }, [id, textSearch])
    return (
        <Fragment>
            <Style>
                <div className="sidebar">
                    <div className="h4">Bài viết cùng thể loại</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Tìm bài viết cùng thể loại"
                            value={textSearch}
                            onChange={(event) => {
                                setTextSearch(event.target.value)
                            }}
                        />
                        <button>Tìm kiếm</button>
                    </form>
                    <ul>
                        {postState.length > 0
                            ? postState.slice(0, 4).map((item, idx) => {
                                  return (
                                      <Fragment>
                                          <li>
                                              <Link
                                                  href={`/blogDetail/${item.seo}`}
                                              >
                                                  <a>
                                                      <Fragment>
                                                          <div className="img">
                                                              <img
                                                                  src={`http://localhost:1337${item.image[0].url}`}
                                                                  alt=""
                                                              />
                                                          </div>
                                                          <div className="sidebar_post_detail">
                                                              <p>
                                                                  {item.title}
                                                              </p>
                                                          </div>
                                                      </Fragment>
                                                  </a>
                                              </Link>
                                          </li>
                                      </Fragment>
                                  )
                              })
                            : 'Không có bài viết cùng loại'}
                    </ul>
                </div>
            </Style>
        </Fragment>
    )
}

export default SideBar
