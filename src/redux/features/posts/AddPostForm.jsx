import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

export default function AddPostForm() {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)
    // console.log("users: ", users)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = !!title && !!content && !!userId

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(
                title,
                content,
                userId
            ))
            setTitle('')
            setContent('')
            setUserId('')
        }

    }

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section id='addForm'>
            <h2 id='add'>Add a New Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

                <label htmlFor="postAuthor">Author:</label>
                <select name="" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <input type="text" name="postContent" id="postContent" value={content} onChange={onContentChanged} />

                <button type='button' disabled={!canSave} onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}
