import styled from 'styled-components'
export const Style = styled.div`
    .post_detail {
        .detail {
            margin-top: 4rem;
            padding: 0 var(--pd);
            display: flex;
            &_post {
                flex: 4;
            }
            &_post_same {
                flex: 1;
            }
        }
    }
`
