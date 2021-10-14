import styled from 'styled-components'

export const Style = styled.div`
    .blogItem {
        margin: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: var(--br);
        margin-bottom: 1.1rem;
        box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.06);
        &:first-child {
            margin-left: none;
        }
        &:last-child {
            margin-right: none;
        }
        .blog_img {
            width: 100%;
            height: 200px;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                // border: none;
                object-fit: cover;
            }
        }
        .blog_infor {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.7rem;
            text-align: center;
            h4 {
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                display: -webkit-box;
                overflow-wrap: anywhere;
            }
            p {
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                display: -webkit-box;
                overflow-wrap: anywhere;
            }
            a {
                text-decoration: none;
            }
        }
    }
`
