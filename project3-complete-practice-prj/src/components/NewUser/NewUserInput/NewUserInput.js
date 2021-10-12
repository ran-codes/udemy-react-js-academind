import Card from '../../UI/Cards';
import Button from '../../UI/Button';

import styles from './NewUserInput.module.css';

const NewUserInput = () => {
  return (
    <Card>
      <form className={styles.controls}>
        <div className={styles.control}>
          <label>Username</label>
          <input type="text" name="username"></input>
        </div>
        <div className={styles.control}>
          <label>Age (Years)</label>
          <input type="number" name="age"></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );

}

export default NewUserInput;
