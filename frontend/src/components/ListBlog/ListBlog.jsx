import React, { Fragment } from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './ListBlog.scss'

const ListBlog = ({ data, limit }) => {
    if (data.length === 0) return <Fragment>Chưa có bài viết nào</Fragment>
    return (
        <Fragment>
            <div className="listBlog">
                {limit
                    ? data.slice(0, 4).map((item, idx) => {
                          return <BlogItem key={idx} data={item}></BlogItem>
                      })
                    : data.map((item, idx) => {
                          return <BlogItem key={idx} data={item}></BlogItem>
                      })}
            </div>
        </Fragment>
    )
}

export default ListBlog
