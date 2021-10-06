import React, { Fragment } from 'react'
import './BlogItem.scss'
import { Link } from 'react-router-dom'
// import ReactMarkdown from 'react-markdown'
const BlogItem = ({ data }) => {
    return (
        <Fragment>
            <div className="blogItem">
                <div className="blog_img">
                    <img
                        src={`http://localhost:1337${data.image[0].url}`}
                        alt={data.title}
                    />
                </div>
                <div className="blog_infor">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <Link to={`/blogDetail/${data.seo}`}>Đọc thêm</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogItem
