import React, { Fragment } from 'react'
import { Style } from './style.js'
import ReactMarkdown from 'react-markdown'
const BlogDetail = ({ data }) => {
    return (
        <Fragment>
            <Style>
                <div className="contain">
                    {data && (
                        <>
                            <h2>{data.title}</h2>
                            <img
                                src={`http://localhost:1337${data.image[0].url}`}
                                alt="anh chi tiet"
                            />
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
