import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import { login } from '../../util/api'
import setAuthToken from '../../util/setAuthToken'
const Login = () => {
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
        const res = await login(dataFormState)
        setAuthToken(res.jwt)
        console.log(res)
    }
    return (
        <Fragment>
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
                            <Link to="/register">Register here.</Link>{' '}
                        </p>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Login
