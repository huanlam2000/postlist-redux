import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice'

import PostsExcerp from './PostsExcerp'
export default function PostsList() {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])

    let content;
    switch (postsStatus) {
        case 'succeeded':
            const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
            content = orderedPosts.map(post => <PostsExcerp key={post.id} post={post} />)
            break;
        case 'failed':
            content = <p>{error}</p>;
            break;
        case 'loading':
        default:
            content = <p>"Loading..."</p>;
            break;
    }
    if (postsStatus === 'loading') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post) => <PostsExcerp key={post.id} post={post} />)
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
