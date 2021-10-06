import React, { Fragment, useEffect, useState } from 'react'
import { getInfor } from '../../util/api'
import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
    const [inforState, setInforState] = useState(null)
    useEffect(async () => {
        try {
            const res = await getInfor()
            setInforState(res)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <Fragment>
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
                            <Link to="/">VanNam</Link>
                        </div>
                        <div className="address">
                            <h3>{inforState.name}</h3>
                            <p>
                                <strong>Địa chỉ: </strong>
                                {inforState.address}
                            </p>
                            <div className="follow">
                                <strong>Liên kết: </strong>
                                <Link to={inforState.linkFacebook}>
                                    <i class="fab fa-facebook"></i>
                                </Link>
                                <Link to={inforState.linkGmail}>
                                    <i class="far fa-envelope"></i>
                                </Link>
                                <Link to={inforState.linkYoutube}>
                                    <i class="fab fa-youtube"></i>
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
        </Fragment>
    )
}

export default Footer
