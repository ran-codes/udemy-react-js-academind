import styles from './Cards.module.css';

export default  function Card (props) {
  const classes = styles.card;
  return <div className={classes}>{props.children}</div>;
}