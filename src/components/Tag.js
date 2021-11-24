import React from 'react'

function Tag(props) {
    return (
        <div className="tag primary-text">
            <small>{props.text}</small>
        </div>
    )
}

export default Tag
