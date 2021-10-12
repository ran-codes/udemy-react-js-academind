import { useState } from 'react';
import NewUserInput from './components/NewUser/NewUserInput/NewUserInput';
import InvalidModal from './components/NewUser/InvalidModal/InvalidModal';


import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const submitHandler = (invalidationState) => {
    setModalMessage(invalidationState);
    if (invalidationState !== '') { setShowModal(true); }
  }

  const closeModalHandler = () => {
    console.log('CLICKED CLOSE');
    setShowModal(false);
  }

  return (
    <div className="app">
      <NewUserInput onSubmit={submitHandler} />
      <InvalidModal
        show={showModal}
        message={modalMessage}
        onClose={closeModalHandler}
      />
    </div>
  );
};

export default App;
