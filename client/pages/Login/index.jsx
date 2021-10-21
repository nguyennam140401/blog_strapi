import React, { Fragment, useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Style } from '../../styles/loginDetail'
import { AuthContext } from '../../context/AuthContext'
import { AlertContext } from '../../context/AlertContext.js'
const Login = () => {
    const router = useRouter()
    const { authState, loginUser } = useContext(AuthContext)
    const { setAlertContext } = useContext(AlertContext)
    const [dataFormState, setDataFormState] = useState({
        identifier: '',
        password: '',
    })

    const changeInput = (event) => {
        const field = event.target.name
        const value = event.target.value
        setDataFormState({
            ...dataFormState,
            [field]: value,
        })
    }
    const submit = async (event) => {
        event.preventDefault()
        try {
            const res = await loginUser(dataFormState)
            if (res.success === true) {
                setAlertContext({
                    status: true,
                    message: 'Dang nhap thanh cong',
                })
                router.push('/')
                console.log(res)
            } else {
                setAlertContext({
                    status: false,
                    message: 'Dang nhap that bai',
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>
            <Style>
                <div className="login">
                    <h3>Login</h3>
                    <form onSubmit={submit} method="post">
                        <div className="form-control">
                            <input
                                onChange={changeInput}
                                placeholder="User name"
                                type="text"
                                name="identifier"
                                value={dataFormState.identifier}
                            />
                        </div>

                        <div className="form-control">
                            <input
                                onChange={changeInput}
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={dataFormState.password}
                            />
                        </div>

                        <div className="button-control">
                            <button>Login</button>
                            <p>
                                If you dont have already account,
                                <Link href="/register">
                                    Register here.
                                </Link>{' '}
                            </p>
                        </div>
                    </form>
                </div>
            </Style>
        </Fragment>
    )
}

export default Login
