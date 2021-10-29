import React, { Fragment, useState, useEffect, useContext } from 'react'

import { getOneCategory, getPostOfCategory } from '../../util/api'
// import { useParams } from 'react-router'
import ListBlog from '../../components/ListBlog/ListBlog'
import { useRouter } from 'next/router'
import { SortContext } from '../../context/SortContext'
import Filter from '../../components/Filter/Filter'
const CategoryBlogPage = ({ postState, id }) => {
    const { sortState } = useContext(SortContext)
    console.log(postState, id)
    const router = useRouter()
    const { seo } = router.query
    const [postsState, setPostsState] = useState(postState)
    useEffect(async () => {
        try {
            const res = await getPostOfCategory(id, '', sortState)
            console.log(res)
            setPostsState(res)
        } catch (error) {
            console.log(error)
        }
    }, [sortState, seo])
    return (
        <Fragment>
            <Filter />
            <ListBlog data={postsState}></ListBlog>
        </Fragment>
    )
}
export async function getServerSideProps(context) {
    const { seo } = context.params
    const res = await getOneCategory(seo)
    return {
        props: { postState: res.posts, id: res.id },
    }
}
export default CategoryBlogPage
