import React, { Fragment, useState } from 'react'
import { Style } from './style'
const FormAddPost = () => {
    const [postDataState, setPostDataState] = useState({
        title: '',
        category: '',
        image: null,
        description: '',
    })
    const createPost = (event) => {
        event.preventDefault()
        // event.stopPropagation()
    }
    const changeInput = (event) => {
        const field = event.target.name
        const value = event.target.value
        console.log(value)
        setPostDataState({ ...postDataState, [field]: value })
    }
    return (
        <Fragment>
            <Style>
                <form
                    onClick={(e) => e.stopPropagation()}
                    onSubmit={createPost}
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
                    <button onClick={createPost}>Submit</button>
                </form>
            </Style>
        </Fragment>
    )
}

export default FormAddPost
