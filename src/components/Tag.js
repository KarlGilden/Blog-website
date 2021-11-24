import React from 'react'

function Tag(props) {
    return (
        <div className="tag secondary-text">
            <small>{props.text}</small>
        </div>
    )
}

export default Tag
