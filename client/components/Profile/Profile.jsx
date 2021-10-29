import React, { Fragment, useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Style } from './style'
import FormAddPost from '../FormAddPost/FormAddPost'
import { useRouter } from 'next/router'
import { fetchPostUser } from '../../util/api'
import ListBlog from '../../components/ListBlog/ListBlog'
// import { Redirect } from 'react-router-dom'
const Profile = () => {
    const { authState } = useContext(AuthContext)
    const [isFormPost, setIsFormPost] = useState(false)
    const [postsState, setPostsState] = useState([])
    const closeForm = () => {
        setIsFormPost(false)
    }
    const router = useRouter()

    useEffect(() => {
        if (!authState.isAuthenticated) {
            router.push('/login')
            return
        }
        const loadData = async () => {
            const res = await fetchPostUser(authState.user.id)
            setPostsState(res)
        }
        loadData()
    }, [])

    return (
        // {isAuthenticated && }
        <Fragment>
            {authState.isAuthenticated ? (
                <Style>
                    {isFormPost && (
                        <div className="wrapper" onClick={closeForm}>
                            <FormAddPost />
                        </div>
                    )}
                    <header>
                        <div className="container">
                            <div className="profile">
                                <div className="profile-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                                        alt=""
                                    />
                                </div>

                                <div className="profile-user-settings">
                                    <h1 className="profile-user-name">
                                        janedoe_
                                    </h1>

                                    <button className="btn profile-edit-btn">
                                        Edit Profile
                                    </button>

                                    <button
                                        className="btn profile-settings-btn"
                                        aria-label="profile settings"
                                    >
                                        <i
                                            className="fas fa-cog"
                                            aria-hidden="true"
                                        ></i>
                                    </button>
                                </div>

                                <div className="profile-bio">
                                    <p>
                                        <span className="profile-real-name">
                                            Jane Doe
                                        </span>{' '}
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit 📷✈️🏕️
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsFormPost(true)
                                    }}
                                >
                                    add post
                                </button>
                            </div>
                        </div>
                    </header>
                    {postsState.length > 0 ? (
                        <ListBlog data={postsState}></ListBlog>
                    ) : (
                        <div>Chua co bai viet nao</div>
                    )}
                </Style>
            ) : (
                <></>
            )}
        </Fragment>
    )
}

export default Profile
