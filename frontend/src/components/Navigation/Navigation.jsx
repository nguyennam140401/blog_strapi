import React, { Fragment, useEffect, useState } from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import * as api from '../../util/api'
const Navigation = () => {
    const [categoryState, setCategoryState] = useState([])
    const [textSearchState, setTextSearchState] = useState('')
    const [searchResult, setSearchResult] = useState([])
    useEffect(async () => {
        const res = await api.getCategory()
        console.log(res)
        setCategoryState(res)
    }, [])
    const search = async () => {
        const res = await api.searchPost(textSearchState)

        setSearchResult(res)
    }
    useEffect(async () => {
        if (textSearchState !== '') {
            await search()
        } else {
            setSearchResult([])
        }
    }, [textSearchState])
    return (
        <Fragment>
            <div className="navigation">
                <div className="logo">
                    <Link to="/">VanNam</Link>
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
                                                    to={`/blogDetail/${item.seo}`}
                                                >
                                                    <div className="result_img">
                                                        <img
                                                            src={`http://localhost:1337${item.image[0].url}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="result_contain">
                                                        <h5>{item.title}</h5>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">News</Link>
                            {categoryState && (
                                <ul className="child">
                                    {categoryState.map((item, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                <li>
                                                    <Link
                                                        to={`/blog/${item.seo}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation
