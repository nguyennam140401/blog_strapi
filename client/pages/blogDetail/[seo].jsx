import React, { Fragment, useEffect, useState } from 'react'
import * as api from '../../util/api'

import { Style } from './style.js'
import BlogDetail from '../../components/BlogDetail/BlogDetail'
import SideBar from '../../components/SideBar/SideBar'
import { useRouter } from 'next/router'
const BlogDetailPage = () => {
    const router = useRouter()
    const { seo } = router.query
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
            <Style>
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
            </Style>
        </Fragment>
    )
}

export default BlogDetailPage
