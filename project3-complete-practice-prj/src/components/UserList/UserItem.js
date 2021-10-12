import styles from './UserItem.module.css';

const UserItem = (props) => {
   return <li className={styles.item}>{props.note}</li>;
}

export default UserItem;