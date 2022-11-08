import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post-header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post-body">
            <p>{message}</p>
        </div>

        <div className="post-buttons">
            <InputOption Icon={ThumbUpIcon} title='Like' color='gray' />
            <InputOption Icon={InsertCommentIcon} title='Comment' color='gray' />
            <InputOption Icon={ShareIcon} title='Share' color='gray' />
            <InputOption Icon={SendIcon} title='Send' color='gray' />
        </div>

    </div>
  )
})

export default Post