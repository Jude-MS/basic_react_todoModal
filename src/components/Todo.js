import React, {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleDelete = () => {
        setModalIsOpen(true)
    } 

    const handleClose = () => {
        setModalIsOpen(false)
    }

    return(
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
            { modalIsOpen && <Modal handleClose={handleClose} />}
            { modalIsOpen && <Backdrop handleClose={handleClose} /> }
        </div>
    )
}

export default Todo;