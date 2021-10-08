import React, { Fragment } from 'react'
import Style from './style.js'
import Link from 'next/link'
// import ReactMarkdown from 'react-markdown'
const BlogItem = ({ data }) => {
    return (
        <Fragment>
            <Style>
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
                        <Link href={`/blogDetail/${data.seo}`}>Đọc thêm</Link>
                    </div>
                </div>
            </Style>
        </Fragment>
    )
}

export default BlogItem
