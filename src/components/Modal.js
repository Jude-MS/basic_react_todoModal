import React from 'react';

function Modal(props){

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={props.handleClose}>Cancel</button>
            <button className="btn" onClick={props.handleClose}>Confirm</button>
        </div>
    )
}

export default Modal;