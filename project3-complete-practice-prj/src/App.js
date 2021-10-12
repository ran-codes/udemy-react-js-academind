import { useState } from 'react';
import NewUserInput from './components/NewUser/NewUserInput/NewUserInput';
import InvalidModal from './components/NewUser/InvalidModal/InvalidModal';
import UserList from './components/UserList/UserList';

import './App.css';

const userData = [
  { id: 'e1', name: "Max", age: "31" },
  { id: 'e12', name: "Madax", age: "311" }
];

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [users, setUsers] = useState(userData);

  const submitHandler = (invalidationState, newData) => {
    setModalMessage(invalidationState);
    console.log(newData);
    if (invalidationState === '') {
      setUsers((prevState) =>[newData, ...prevState] )
    } else {
      setShowModal(true);
    }
  };

  const closeModalHandler = () => {
    console.log('CLICKED CLOSE');
    setShowModal(false);
  };

  return (
    <div className="app">
      <NewUserInput onSubmit={submitHandler} />
      <InvalidModal
        show={showModal}
        message={modalMessage}
        onClose={closeModalHandler}
      />
      <UserList data={users} />
    </div>
  );
};

export default App;
