import React, { Fragment, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Register.scss'
import { register } from '../../util/api'
import AlertMessage from '../../components/AlertMessage/AlertMessage'
import { AlertContext } from '../../context/AlertContext'
const Register = () => {
    const { alertContextState, setAlertContextState } = useContext(AlertContext)
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
    const history = useHistory()
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
        setAlertContextState({ ...alertContextState, isDisplay: true })
        if (dataFormState.password !== dataFormState.confirmPassword) {
            window.alert('Password not match with confirm password')
            return
        }
        try {
            const res = await register(dataFormState)
            await setAlertContextState({
                ...alertContextState,
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
            history.push('/login')
            setTimeout(function () {
                setAlertContextState({ ...alertContextState, isDisplay: false })
            }, 2000)
        } catch (error) {
            console.log(error)
            setAlertContextState({
                ...alertContextState,
                isDisplay: true,
                isLoading: false,
                message: 'Loi gi do',
            })
            setTimeout(function () {
                setAlertContextState({ ...alertContextState, isDisplay: false })
            }, 2000)
        }
    }
    return (
        <Fragment>
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
                            <Link to="/login">Login here.</Link>{' '}
                        </p>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Register
