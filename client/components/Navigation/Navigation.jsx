import React, { Fragment, useEffect, useState } from 'react'
import { Style } from './style.js'
import Link from 'next/link'
import * as api from '../../util/api'
import setAuthToken from '../../util/setAuthToken'
const Navigation = () => {
    const [categoryState, setCategoryState] = useState([])
    const [textSearchState, setTextSearchState] = useState('')
    const [searchResult, setSearchResult] = useState([])
    useEffect(async () => {
        const res = await api.getCategory()
        setCategoryState(res)
    }, [])
    const search = async () => {
        const res = await api.searchPost(textSearchState)

        setSearchResult(res)
    }
    useEffect(() => {
        const solve = async () => {
            if (textSearchState !== '') {
                await search()
            } else {
                setSearchResult([])
            }
        }
        solve()
    }, [textSearchState])
    // const logout = () => {
    //     setAuthToken('')
    //     window.localStorage.removeItem('blog_strapi_jwt')
    // }
    return (
        <Fragment>
            <Style>
                <div className="navigation">
                    <div className="logo">
                        <Link href="/">VanNam</Link>
                    </div>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search something ....."
                            value={textSearchState}
                            onChange={(event) => {
                                setTextSearchState(event.target.value)
                            }}
                            // spellCheck="false"
                            onBlur={() => {
                                setTimeout(() => {
                                    setTextSearchState('')
                                    setSearchResult([])
                                }, 140)
                            }}
                        />
                        <div className="search_result">
                            {searchResult.length > 0 && (
                                <ul>
                                    {searchResult.map((item, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                <li>
                                                    <Link
                                                        href={`/blogDetail/${item.seo}`}
                                                    >
                                                        <a>
                                                            <div className="result_img">
                                                                <img
                                                                    src={`http://localhost:1337${item.image[0].url}`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="result_contain">
                                                                <h5>
                                                                    {item.title}
                                                                </h5>
                                                                <p>
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="nav_ul">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/blog">News</Link>
                                {categoryState && (
                                    <ul className="child">
                                        {categoryState.map((item, idx) => {
                                            return (
                                                <Fragment key={idx}>
                                                    <li>
                                                        <Link
                                                            href={`/blog/${item.seo}`}
                                                        >
                                                            <a>{item.name}</a>
                                                        </Link>
                                                    </li>
                                                </Fragment>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            {/* {localStorage.getItem('blog_strapi_jwt') !== '' ? (
                                <li onClick={logout}>
                                    <Link href="/">Logout</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                            )} */}
                        </ul>
                    </div>
                </div>
            </Style>
        </Fragment>
    )
}

export default Navigation
