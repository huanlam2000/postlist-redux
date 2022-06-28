import React from 'react'
import { useDispatch } from 'react-redux'

import { reactionAdded } from './postsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '💖',
    rocket: '🚀',
    coffee: '🧃'
}

export default function ReactionButtons({ post }) {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([nameEmoji, emoji]) => {
        return (
            <button
                key={nameEmoji}
                type="button"
                className='reactionButton'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: nameEmoji }))}
            >
                {emoji} {post.reactions[nameEmoji]}
            </button>
        )
    })
    return (
        <div className='reactionWrapper'>{reactionButtons}</div>
    )
}
