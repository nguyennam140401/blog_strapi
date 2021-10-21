import React, { Fragment } from 'react'
import { Style } from './style.js'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
const BlogDetail = ({ data }) => {
    const myLoader = ({ src }) => {
        return src
    }
    return (
        <Fragment>
            <Style>
                <div className="contain">
                    {data && (
                        <>
                            <h2>{data.title}</h2>
                            <div className="detail_img">
                                <Image
                                    loader={myLoader}
                                    objectFit="cover"
                                    layout="fill"
                                    src={`http://localhost:1337${data.image[0].url}`}
                                    alt="anh chi tiet"
                                />
                            </div>
                            <div className="contain_deat">
                                <ReactMarkdown>
                                    {data.description}
                                </ReactMarkdown>
                            </div>
                        </>
                    )}
                </div>
            </Style>
        </Fragment>
    )
}

export default BlogDetail
