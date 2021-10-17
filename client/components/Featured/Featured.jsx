import React, { Fragment, useState, useEffect } from 'react'
import { getFeatured } from '../../util/api'
import ReactMarkdown from 'react-markdown'
import { Style } from './style'
import Image from 'next/image'
const Featured = () => {
    const [featuredState, setFeaturedState] = useState([])
    useEffect(() => {
        const solve = async () => {
            try {
                const res = await getFeatured()
                setFeaturedState(res)
            } catch (error) {
                console.log(error)
            }
        }
        solve()
    }, [])
    const myLoader = ({ src }) => {
        return src
    }
    return (
        <Style>
            <div className="featured">
                {featuredState.length > 0 &&
                    featuredState.map((item, idx) => {
                        return (
                            <div className="featured_item" key={idx}>
                                <div className="featured_item--img">
                                    <Image
                                        loader={myLoader}
                                        layout="fill"
                                        objectFit="cover"
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
        </Style>
    )
}

export default Featured
