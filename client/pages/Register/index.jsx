import React, { Fragment, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Style } from './style.js'
import { register } from '../../util/api'
import AlertMessage from '../../components/AlertMessage/AlertMessage'
import { AlertContext } from '../../context/AlertContext'
const Register = () => {
    const router = useRouter()
    const { alertContextState, setAlertContext } = useContext(AlertContext)
    const [dataFormState, setDataFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [statusFormState, setStatusFormState] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
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
        setAlertContext({ isDisplay: true })
        if (dataFormState.password !== dataFormState.confirmPassword) {
            window.alert('Password not match with confirm password')
            return
        }
        try {
            const res = await register(dataFormState)
            await setAlertContextState({
                status: true,
                isDisplay: true,
                message: 'Đăng kí thành công',
                isLoading: false,
            })
            setDataFormState({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
            router.push('/login')
            setTimeout(function () {
                setAlertContext({ isDisplay: false })
            }, 2000)
        } catch (error) {
            console.log(error)
            setAlertContext({
                isDisplay: true,
                isLoading: false,
                message: 'Loi gi do',
            })
            setTimeout(function () {
                setAlertContext({ isDisplay: false })
            }, 2000)
        }
    }
    return (
        <Fragment>
            <Style>
                <AlertMessage />
                <div className="register">
                    <h3>Register</h3>
                    <form onSubmit={submit} method="post">
                        <div className="form-control">
                            <input
                                onChange={changeInput}
                                placeholder="User name"
                                type="text"
                                name="username"
                                value={dataFormState.username}
                            />
                        </div>

                        <div className="form-control">
                            <input
                                onChange={changeInput}
                                placeholder="email"
                                type="email"
                                name="email"
                                value={dataFormState.email}
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
                        <div className="form-control">
                            <input
                                onChange={changeInput}
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={dataFormState.confirmPassword}
                            />
                        </div>
                        <div className="button-control">
                            <button>Register</button>
                            <p>
                                If you have already account,
                                <Link href="/login">Login here.</Link>{' '}
                            </p>
                        </div>
                    </form>
                </div>
            </Style>
        </Fragment>
    )
}

export default Register
