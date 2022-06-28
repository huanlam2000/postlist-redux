import React from 'react'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

export default function PostsExcerp({ post }) {
    // console.log("post: ", post)
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>

            <div className='postCredit'>
                <PostAuthor userId={+post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
            </div>
        </article>
    )
}
