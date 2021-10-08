import React, { Fragment } from 'react'
import Style from './style.js'
import Link from 'next/link'
import ListBlog from '../../components/ListBlog/ListBlog'
const CategoryBlog = ({ data }) => {
    return (
        <Fragment>
            <Style>
                <div className="category_blog">
                    <div className="category_blog--header">
                        <h2>{data.name}</h2>
                        {/* <Link href={`/blog/${data.seo}`}>
                            Xem thêm <i className="fas fa-arrow-right"></i>
                        </Link> */}
                    </div>
                    <div className="category_blog--list">
                        <ListBlog data={data.posts} limit></ListBlog>
                    </div>
                </div>
            </Style>
        </Fragment>
    )
}

export default CategoryBlog
