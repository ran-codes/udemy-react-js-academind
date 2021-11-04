import { Fragment } from 'react';

import classes from './MeetupDetail.module.css';


function MeetupDetail(props) {


  return (
    <Fragment>
      <section className={classes.detail}>
        <img src={props.img} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </Fragment>
  );
}

export default MeetupDetail;
