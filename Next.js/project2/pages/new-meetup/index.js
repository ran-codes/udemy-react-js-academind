import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from "react";

function NewMeetup() {
  function addMeetupHandler(enteredData) {
    console.log(enteredData)
  }

  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
  );
}

export default NewMeetup;
