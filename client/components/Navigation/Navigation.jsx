import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Style } from './style.js'
import Link from 'next/link'
import * as api from '../../util/api'
import { AuthContext } from '../../context/AuthContext'
import Image from 'next/image'
import UserNavigation from '../UserNavigation/UserNavigation.jsx'
import parse from 'html-react-parser'
const Navigation = () => {
    const [categoryState, setCategoryState] = useState([])
    const [textSearchState, setTextSearchState] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const { authState, logoutUser } = useContext(AuthContext)
    useEffect(() => {
        const solve = async () => {
            const res = await api.getCategory()
            setCategoryState(res)
        }
        solve()
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
    const myLoader = ({ src }) => {
        return src
    }
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
                                                                <Image
                                                                    loader={
                                                                        myLoader
                                                                    }
                                                                    objectFit="cover"
                                                                    width="100"
                                                                    height="100"
                                                                    src={`http://localhost:1337${item.image[0].url}`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="result_contain">
                                                                <h5>
                                                                    {item.title}
                                                                </h5>
                                                                <p>
                                                                    {parse(
                                                                        item.description
                                                                    )}
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
                            {/* <li>
                                {isAuthenticated === true ? (
                                    <Link href="/logout">Logout</Link>
                                ) : (
                                    <Link href="/login">Login</Link>
                                )}
                            </li> */}
                            {authState.isAuthenticated ? (
                                <UserNavigation />
                            ) : (
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </Style>
        </Fragment>
    )
}

export default Navigation
