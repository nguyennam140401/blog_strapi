import React, { Fragment, useState, useEffect } from 'react'
import { Style } from './style'
import { getCategory, createPost } from '../../util/api'
import Editor from '../Editor'
const FormAddPost = () => {
    const [categoryState, setCategoryState] = useState([])
    const [postDataState, setPostDataState] = useState({
        title: '',
        category: '',
        description: '',
    })
    const [editorLoaded, setEditorLoaded] = useState(false)
    const [descriptionState, setDescriptionState] = useState('')
    useEffect(() => {
        setEditorLoaded(true)
        const getData = async () => {
            const res = await getCategory()
            setCategoryState(res)
        }
        getData()
    }, [])
    const submitPost = async (event) => {
        event.preventDefault()

        const formData = new FormData()

        const formElements = event.target.querySelectorAll('input')
        // const data = {}
        for (let i = 0; i < formElements.length; i++) {
            const currentElement = formElements[i]
            if (!['submit', 'file'].includes(currentElement.type)) {
            } else if (currentElement.type === 'file') {
                for (let i = 0; i < currentElement.files.length; i++) {
                    const file = currentElement.files[i]
                    formData.append(
                        `files.${currentElement.name}`,
                        file,
                        file.name
                    )
                }
            }
        }
        console.log(
            postDataState.title.trim().replace(/ /g, '-'),
            descriptionState
        )
        const result = { ...postDataState }
        result.seo = postDataState.title.trim().replace(/ /g, '-')
        result.description = descriptionState
        // await setPostDataState({
        //     ...postDataState,
        //     seo: postDataState.title.trim().replace(/ /g, '-'),
        //     description: descriptionState,
        // })
       
        formData.append('data', JSON.stringify(result))
        try {
            const res = await createPost(formData)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const changeInput = (event) => {
        if (event.target.type === 'file') return
        const field = event.target.name
        const value = event.target.value
        // console.log([event.target])
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
                    {/* <div className="form-control">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={postDataState.description}
                            onChange={changeInput}
                        />
                    </div> */}

                    <Editor
                        name="description"
                        onChange={(data) => {
                            setDescriptionState(data)
                        }}
                        editorLoaded={editorLoaded}
                    />
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
