import styled from 'styled-components'
export const Style = styled.div`
    position: relative;

    .menu {
        position: absolute;
        z-index: 1000;
        top: 100%;
        right: 0;
        border-radius: 1rem;
        box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.4);
        display: none;
        ul {
            display: block !important;
            background-color: #ccc;
            border-radius: 1rem;
            padding: 2rem 0;
        }
    }
    &:hover .menu {
        display: block;
    }
`
