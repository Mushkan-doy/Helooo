import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/styles.css';
import '../../assets/css/style1.css';
import ViewForm from "./ViewForm";
// function Login() {

//     // const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return(
//         <>           
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                 <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                     Close
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                     Save Changes
//                 </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )

// }


const LgModal = ({
    renderTrigger,
    renderContent,
    isOpenProp,
    onCloseModal
})=>{
    let [isOpen, setIsOpen] = useState(!!isOpenProp);

    function closeModal() {
        if (typeof isOpenProp !== "boolean") {
            setIsOpen(false);
        }
        onCloseModal && onCloseModal();
    }

    function openModal() {
        if (typeof isOpenProp !== "boolean") {
            setIsOpen(true);
        }
    }

   

    return(
        <>
        {renderTrigger ? (
                renderTrigger(openModal)
            ) : (
                <button className="alio_green btn" onClick={openModal}>
                    <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg" style={{"fontSize":"15px","fontFamily": "'Muli', sans-serif"}}>Sign In</span>
                </button>
            )}
           
             <Modal 
                show={isOpen} 
                onHide={closeModal} 
                className="custom-modal-style" 
                size="lg"
                backdrop="static"
                keyboard={false}>
                 <Modal.Body>
                 <div>
                    {renderContent(closeModal)}
                 </div>
                    
                 </Modal.Body>
             </Modal> 
        </>
    )
}
export default LgModal;