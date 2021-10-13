import React, { Fragment } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import { useEffect } from 'react'
import * as api from '../util/api'
import CategoryBlog from '../components/CategoryBlog/CategoryBlog'
import Featured from '../components/Featured/Featured'
import Style from './style.js'

const Home = ({ carouselState, categoryState }) => {
    return (
        <Style>
            <Carousel>
                {carouselState.map((item, idx) => {
                    return (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={`http://localhost:1337${item.img[0].url}`}
                                alt="First slide"
                                height="500px"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div className="home">
                <Featured></Featured>
                {categoryState.map((item, idx) => {
                    return (
                        item.posts.length > 0 && (
                            <CategoryBlog key={idx} data={item}></CategoryBlog>
                        )
                    )
                })}
            </div>
        </Style>
    )
}
export const getStaticProps = async () => {
    const res = await api.getCarousel()
    const res2 = await api.getCategory()
    return {
        props: {
            carouselState: res,
            categoryState: res2,
        },
    }
}

export default Home
