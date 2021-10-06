import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'
import { register } from '../../util/api'
const Register = () => {
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
        if (dataFormState.password !== dataFormState.confirmPassword) {
            window.alert('Password not match with confirm password')
            return
        }
        const res = await register(dataFormState)
        console.log(res)
    }
    return (
        <Fragment>
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
