import styled from 'styled-components'
export const Style = styled.div`
    .featured {
        padding: var(--pd);
        display: flex;
        .featured_item {
            position: relative;
            flex: 1;
            padding: 0 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            .featured_item--img {
                position: relative;
                width: 100px;
                height: 90px;
            }
            &--contain {
                text-align: center;
                margin-top: 2rem;
            }
        }
    }
`
