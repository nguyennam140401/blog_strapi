import React, { Fragment } from 'react'
import { Style } from './style.js'
import Link from 'next/link'
import Image from 'next/image'
// import ReactMarkdown from 'react-markdown'
const BlogItem = ({ data }) => {
    // const src = `http://localhost:1337${data.image[0].url}`
    const myLoader = ({ src }) => {
        return src
    }
    return (
        <Fragment>
            <Style>
                <div className="blogItem">
                    <div className="blog_img">
                        <Image
                            loader={myLoader}
                            layout="fill"
                            objectFit="cover"
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
