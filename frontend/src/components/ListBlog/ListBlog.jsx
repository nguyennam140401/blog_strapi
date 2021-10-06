import React, { Fragment } from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './ListBlog.scss'

const ListBlog = ({ data, limit }) => {
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
                {/* {data.map((item, idx) => {
                    return <BlogItem key={idx} data={item}></BlogItem>
                })} */}
            </div>
        </Fragment>
    )
}

export default ListBlog
