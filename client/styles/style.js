import styled from 'styled-components'
export default styled.div`
    .home {
        & > * {
            &:nth-child(2n + 1) {
                background-color: var(--bg-light);
            }
        }
    }
`
