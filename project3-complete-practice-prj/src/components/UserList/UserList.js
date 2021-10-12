import Card from '../UI/Cards';
import UserItem from './UserItem';

// import styles from './UserList.module.css';

const UserList = (props) => {
  const items = props.data.map((user) => {
    const message = `${user.name} (${user.age} years old)`;
    return (<UserItem key={user.id} note={message} />);
  });

  console.log(items);

  return (
    <Card>
      <ul>{items}</ul>
    </Card>
  );
}

export default UserList;