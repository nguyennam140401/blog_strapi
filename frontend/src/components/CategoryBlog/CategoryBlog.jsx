import React, { Fragment } from 'react'
import './CategoryBlog.scss'
import { Link } from 'react-router-dom'
import ListBlog from '../../components/ListBlog/ListBlog'
const CategoryBlog = ({ data }) => {
    return (
        <Fragment>
            <div className="category_blog">
                <div className="category_blog--header">
                    <h2>{data.name}</h2>
                    <Link to={`/blog/${data.seo}`}>
                        Xem thêm <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="category_blog--list">
                    <ListBlog data={data.posts} limit></ListBlog>
                </div>
            </div>
        </Fragment>
    )
}

export default CategoryBlog
