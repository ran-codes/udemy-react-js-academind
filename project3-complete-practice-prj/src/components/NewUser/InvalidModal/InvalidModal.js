import Button from '../../UI/Button';

import styles from './InvalidModal.module.css';

const InvalidModal = (props) => {
  const modal = (
    <div className={styles.modal} onClick={props.onClose}>
      <div
        className={styles['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles['modal-header']}>
          <h4 className={styles['modal-title']}>Invalid Input</h4>
        </div>
        <div className={styles['modal-body']}>{props.message}</div>
        <div className={styles['modal-footer']}>
          <Button onClick={props.onClose}>Okay</Button>
        </div>
      </div>
    </div>
  ); 
 

  return (
    props.show ? modal : null
  );
}

export default InvalidModal;