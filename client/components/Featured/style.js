import styled from 'styled-components'
export const Style = styled.div`
    .featured {
        padding: var(--pd);
        display: flex;
        .featured_item {
            flex: 1;
            padding: 0 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            &--contain {
                text-align: center;
                margin-top: 2rem;
            }
        }
    }
`
