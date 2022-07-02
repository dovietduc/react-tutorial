import React from 'react'

function Child(props) {

    
    const onDelete = props.onDelete;



    const handleDelete = () => {
        onDelete(2);
    }

    return (
        <div>
            <button
            onClick={handleDelete} 
            className="btn btn-danger btn-sm">Delete</button>
        </div>
    )
}

export default Child