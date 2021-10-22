import styled from 'styled-components'
export const Style = styled.div`
    .footer {
        padding: var(--pd);
        display: flex;
        justify-content: space-between;
        background-color: var(--light-color);
        .logo {
            a {
                color: #000;
                font-size: 2rem;
                text-decoration: none;
                font-weight: bold;
            }
        }
        strong {
            margin-right: 1rem;
        }
        .address {
            i {
                font-size: 1.5rem;
                margin-right: 1.5rem;
            }
        }
    }
    .contact {
        background: var(--primary-color);
        // padding: var(--pd);
        display: flex;
        padding: 3rem var(--pd);
        justify-content: space-between;
        p {
            font-size: 1.5rem;
        }
        form {
            display: flex;
            input,
            button {
                outline: none;
                border: none;
                padding: 0.4rem 1rem;
            }
            button {
                background-color: var(--bg-light);
                &:hover {
                    background-color: var(--light-color);
                }
            }
        }
    }
`
