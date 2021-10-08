import styled from 'styled-components'
export default styled.div`
    .login {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        form {
            width: 400px;
            // border: 1px solid #ccc;
            border-radius: var(--br);
            padding: 3rem;
            input,
            button {
                border: none;
                outline: none;
            }
            button {
                background-color: var(--light-color);
                padding: 0.2rem 2.5rem;
                border-radius: var(--br);
                color: #fff;
            }
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
                rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            .form-control {
                margin-bottom: 2rem;
            }
            .button-control {
                text-align: center;
            }
        }
    }
`
