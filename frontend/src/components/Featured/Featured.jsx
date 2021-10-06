import React, { Fragment, useState, useEffect } from 'react'
import { getFeatured } from '../../util/api'
import ReactMarkdown from 'react-markdown'
import './Featured.scss'
const Featured = () => {
    const [featuredState, setFeaturedState] = useState([])
    useEffect(async () => {
        try {
            const res = await getFeatured()
            setFeaturedState(res)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <Fragment>
            <div className="featured">
                {featuredState.length > 0 &&
                    featuredState.map((item, idx) => {
                        return (
                            <div className="featured_item" key={idx}>
                                <div className="featured_item--img">
                                    <img
                                        src={`http://localhost:1337${item.image.url}`}
                                        alt=""
                                    />
                                </div>
                                <div className="featured_item--contain">
                                    <h4>{item.title}</h4>
                                    <ReactMarkdown>
                                        {item.description}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </Fragment>
    )
}

export default Featured
