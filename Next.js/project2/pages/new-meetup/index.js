import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from "react";
import router, { useRouter } from "next/router";

function NewMeetup() {
  useRouter()

  async function addMeetupHandler(enteredMeetupData) {
    console.log("addMeetupHandler");
    console.log(JSON.stringify(enteredMeetupData));

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data)

    router.push("/")
  }

  return  <NewMeetupForm onAddMeetup={addMeetupHandler}/>

}

export default NewMeetup;
