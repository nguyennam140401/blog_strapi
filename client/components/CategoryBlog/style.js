import styled from 'styled-components'
export const Style = styled.div`
    .category_blog {
        padding: 3rem var(--pd);
        // padding-top: 3rem;
        // margin-top: 100px;
        .category_blog--header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                text-decoration: none;
                color: var(--primary-color);
                i {
                    margin-left: 1rem;
                    animation: animate1 1s linear infinite;
                    @keyframes animate1 {
                        0% {
                            transform: translateX(0rem);
                        }
                        50% {
                            transform: translateX(1rem);
                        }
                        100% {
                            transform: translateX(0rem);
                        }
                    }
                }
            }
        }
        .category_blog--list {
            .listBlog {
                padding: 0;
            }
        }
    }
`
