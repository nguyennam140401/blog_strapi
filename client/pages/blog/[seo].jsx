import React, { Fragment, useState, useEffect } from 'react'

import { getOneCategory } from '../../util/api'
// import { useParams } from 'react-router'
import ListBlog from '../../components/ListBlog/ListBlog'
import { useRouter } from 'next/router'
const CategoryBlogPage = ({ postState }) => {
    // console.log(postState)
    // const router = useRouter()
    // const { seo } = router.query
    // const [postState, setPostState] = useState([])
    // useEffect(async () => {
    //     try {
    //         const res = await getOneCategory(seo)
    //         setPostState(res.posts)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [seo])
    return (
        <Fragment>
            <ListBlog data={postState}></ListBlog>
        </Fragment>
    )
}
export async function getServerSideProps(context) {
    const { seo } = context.params
    const res = await getOneCategory(seo)
    return {
        props: { postState: res.posts },
    }
}
export default CategoryBlogPage
