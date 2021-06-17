import React from 'react';
import styles from'./styles.module.scss';
import Modal from 'react-modal';

function Modals({isOpen, handleCloseModal, message}) {                     

var subtitle;

const afterOpenModal = () => {
  subtitle.style.color = '#661800';
} 

const modalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '30%',        
      height                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
 //   border                : '3px solid #992400',
      padding               : '0',
  //  borderRadius          : '35px',
      font                  : 'bold 20px arial,serif',
      textAlign             : 'center',
      lineHeight            : '60px',     
      color                 : '#000000'
    }
  };
  return (
    <Modal
          isOpen={isOpen}
          onAfterOpen={() => afterOpenModal}
          onRequestClose={() => handleCloseModal()}
          style={modalStyles}
        >{message}
        <div className={styles.modalDiv}>
        <button className={styles.closeButton} onClick={handleCloseModal}>Close</button>
        </div>
        </Modal>
  );
}

export default Modals;
