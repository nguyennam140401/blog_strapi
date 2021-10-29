import React, { Fragment, useEffect, useState, useContext } from 'react'

import ListBlog from '../../components/ListBlog/ListBlog'
import { SortContext } from '../../context/SortContext'
import * as api from '../../util/api'
import Filter from '../../components/Filter/Filter'
const BlogPage = () => {
    const { sortState } = useContext(SortContext)
    const [postState, setPostState] = useState([])
    useEffect(() => {
        const solve = async () => {
            try {
                const res = await api.getPost(sortState)
                console.log(res)
                setPostState(res)
            } catch (error) {
                console.log(error)
            }
        }
        solve()
    }, [sortState])
    return (
        <Fragment>
            <Filter />
            <ListBlog data={postState}></ListBlog>
        </Fragment>
    )
}

export default BlogPage
