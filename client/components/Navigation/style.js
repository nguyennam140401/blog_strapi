import styled from 'styled-components'
export const Style = styled.div`
    .navigation {
        height: var(--height-navigation);
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        padding: 0 var(--pd);
        align-items: center;
        .logo {
            a {
                text-decoration: none;
                font-size: 2rem;
                color: #fff;
            }
            flex-basis: 100%;
        }
        .search {
            position: relative;
            input {
                width: 350px;
                padding: 0.25rem 0.7rem;
                border-radius: var(--br);
                border: none;
                outline: none;
            }
            .search_result {
                position: absolute;
                background-color: var(--light-color);
                width: 100%;
                border-radius: var(--br);
                z-index: 1000;
                p {
                    padding: 20px 0 0 20px;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    li {
                        /* width: max-content; */
                        padding: 0 1rem;
                        /* overflow: hidden; */
                        &:hover {
                            background-color: var(--primary-color);
                        }
                        a {
                            display: flex;
                            text-decoration: none;
                            color: #000;
                            .result_img {
                                position: relative;
                            }
                            img {
                                width: 100px;
                                height: 100px;
                                object-fit: contain;
                            }
                            .result_contain {
                                padding: 1rem;
                                width: 100%;
                                word-break: break-word;
                                h5 {
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    padding: unset;
                                }
                                p {
                                    -webkit-line-clamp: 1;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    padding: unset;
                                }
                            }
                        }
                    }
                }
            }
        }
        .nav_ul {
            flex-basis: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            ul {
                list-style: none;
                display: flex;
                margin: 0;
                li {
                    padding: 0 20px;
                    width: max-content;
                    color: #fff;
                    text-decoration: none;
                    font-size: 1.2rem;
                    margin: 0;
                    cursor: pointer;
                    p,
                    a {
                        color: #fff;
                        text-decoration: none;
                        font-size: 1.2rem;
                        margin: 0;
                        cursor: pointer;
                    }
                    position: relative;
                    ul.child {
                        position: absolute;
                        top: calc(100% + 10px);
                        right: 0;
                        display: none;
                        background-color: var(--primary-color);
                        padding: 0;
                        width: max-content;
                        z-index: 1000;
                        li {
                            padding: 20px;
                            width: 100%;
                            text-align: right;
                            a {
                                width: 100%;
                            }
                            &:hover {
                                background-color: var(--light-color);
                            }
                        }
                        &::after {
                            content: ' ';
                            width: 100%;
                            height: 30px;
                            position: absolute;
                            background-color: transparent;
                            top: -15px;
                        }
                    }

                    &:hover ul.child {
                        display: block;
                    }
                }
            }
        }
    }
`
