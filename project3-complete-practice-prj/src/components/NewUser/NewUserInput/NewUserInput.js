import { useState } from 'react';
import Card from '../../UI/Cards';
import Button from '../../UI/Button';

import styles from './NewUserInput.module.css';

const NewUserInput = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const errorMissing = userName.length === 0 || userAge.length === 0;
    const errorInvalidAge = userAge < 0;
    const newData =  { id: Math.random().toString, name: userName, age: userAge };
    let invalidationMessage = "";
    
    // Check for errors
    if (errorMissing) {
      invalidationMessage='Please enter a valid name and age (non-empty values).';
    } else if (errorInvalidAge) {
      invalidationMessage = 'Please enter a valid age (> 0).';
    } else {
      setUserName('');
      setUserAge('');
    }

    // Gather data
    
    // Lift state up to App
    props.onSubmit(invalidationMessage, newData);
  }

  return (
    <Card>
      <form className={styles.controls} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={onUserNameChange}
          ></input>
        </div>
        <div className={styles.control}>
          <label>Age (Years)</label>
          <input
            type="number"
            name="age"
            value={userAge}
            onChange={onUserAgeChange}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserInput;
