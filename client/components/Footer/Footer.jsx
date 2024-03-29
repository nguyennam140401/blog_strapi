import React, { Fragment, useEffect, useState } from 'react'
import { getInfor } from '../../util/api'
import Link from 'next/link'
import { Style } from './style.js'
const Footer = () => {
    const [inforState, setInforState] = useState(null)
    useEffect(() => {
        const solve = async () => {
            try {
                const res = await getInfor()
                setInforState(res)
            } catch (error) {
                console.log(error)
            }
        }
        solve()
    }, [])
    return (
        <Fragment>
            <Style>
                <div className="contact">
                    {inforState && (
                        <Fragment>
                            <div className="phone">
                                <p>
                                    <strong>Điện thoại: </strong>
                                    {inforState.phone}
                                </p>
                            </div>
                            <div className="gmail">
                                <form>
                                    <input type="text" />
                                    <button>Gửi đi</button>
                                </form>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div className="footer">
                    {inforState && (
                        <Fragment>
                            <div className="logo">
                                <Link href="/">VanNam</Link>
                            </div>
                            <div className="address">
                                <h3>{inforState.name}</h3>
                                <p>
                                    <strong>Địa chỉ: </strong>
                                    {inforState.address}
                                </p>
                                <div className="follow">
                                    <strong>Liên kết: </strong>
                                    <Link href={inforState.linkFacebook}>
                                        <a>
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </Link>
                                    <Link href={inforState.linkGmail}>
                                        <a>
                                            <i className="far fa-envelope"></i>
                                        </a>
                                    </Link>
                                    <Link href={inforState.linkYoutube}>
                                        <a>
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="phone">
                                <p>
                                    <strong>Điện thoại: </strong>
                                    {inforState.phone}
                                </p>
                            </div>
                        </Fragment>
                    )}
                </div>
            </Style>
        </Fragment>
    )
}

export default Footer
