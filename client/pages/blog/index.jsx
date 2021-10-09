import React, { Fragment, useEffect, useState } from 'react'

import ListBlog from '../../components/ListBlog/ListBlog'
import * as api from '../../util/api'
const BlogPage = () => {
    const [postState, setPostState] = useState([])
    useEffect(async () => {
        try {
            const res = await api.getPost()
            console.log(res)
            setPostState(res)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <Fragment>
            <ListBlog data={postState}></ListBlog>
        </Fragment>
    )
}

export default BlogPage
