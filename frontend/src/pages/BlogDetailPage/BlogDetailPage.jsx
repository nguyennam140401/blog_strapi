import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../util/api'

import './BlogDetailPage.scss'
import BlogDetail from '../../components/BlogDetail/BlogDetail'
import SideBar from '../../components/SideBar/SideBar'
const BlogDetailPage = () => {
    const { seo } = useParams()
    const [postState, setPostState] = useState(null)
    useEffect(async () => {
        try {
            const res = await api.getOnePost(seo)
            setPostState(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }, [seo])
    return (
        <Fragment>
            <div className="post_detail">
                <div className="detail">
                    <div className="detail_post">
                        <BlogDetail data={postState}></BlogDetail>
                    </div>
                    <div className="detail_post_same">
                        {postState && (
                            <SideBar id={postState.category.id}></SideBar>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogDetailPage
