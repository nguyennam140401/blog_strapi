import React, { Fragment, useState, useEffect } from 'react'
import { Style } from './style'
import { getCategory, createPost, uploadImg } from '../../util/api'
const FormAddPost = () => {
    const [categoryState, setCategoryState] = useState([])
    const [postDataState, setPostDataState] = useState({
        title: '',
        category: '',
        image: null,
        description: '',
    })
    useEffect(() => {
        const getData = async () => {
            const res = await getCategory()
            setCategoryState(res)
        }
        getData()
    }, [])
    const submitPost = async (event) => {
        event.preventDefault()
        console.log('up')
        try {
            const dataPost = await createPost(postDataState)
            const dataImg = {
                files: postDataState.image,
                ref: 'post',
                refId: dataPost.id,
                field: 'image',
            }
            await uploadImg(dataImg)
            window.alert('ok roi')
        } catch (error) {
            console.log(error)
        }
    }
    const changeInput = (event) => {
        const field = event.target.name
        const value = event.target.value
        setPostDataState({ ...postDataState, [field]: value })
    }
    return (
        <Fragment>
            <Style>
                <form
                    onSubmit={submitPost}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="title"
                            name="title"
                            value={postDataState.title}
                            onChange={changeInput}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="file"
                            name="image"
                            value={postDataState.image}
                            onChange={changeInput}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={postDataState.description}
                            onChange={changeInput}
                        />
                    </div>
                    <div className="form-control">
                        <select
                            name="category"
                            value={postDataState.category}
                            onChange={changeInput}
                        >
                            {categoryState.map((item, idx) => {
                                return (
                                    <option key={idx} value={item.id}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </Style>
        </Fragment>
    )
}

export default FormAddPost
