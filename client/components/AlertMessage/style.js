import styled from 'styled-components'
export const Style = styled.div`
    .alert_message {
        padding: 1rem 2rem;
        position: fixed;
        background-color: var(--light-color);
        left: 50%;
        transform: translateX(-50%);
        border-radius: var(--br);
        animation: alertAnimate ease-in-out 0.6s;
        p {
            margin: 0;
            text-align: center;
        }
        @keyframes alertAnimate {
            0% {
                transform: translateX(-50%) translateY(-3rem);
                opacity: 0;
            }
            100% {
                transform: translateX(-50%) translateY(0rem);
                opacity: 1;
            }
        }
    }
`
