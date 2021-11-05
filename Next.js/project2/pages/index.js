import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

import { Fragment } from 'react';

function HomePage(props) {
  return (
    <Fragment>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  // fetch data from API
  const client = await MongoClient.connect(
      'mongodb+srv://ranli2011:mangobub12@cluster0.lucol.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  
  const db = client.db();

  const meetupsCollections = db.collection('meetups');
  
  const meetups = await meetupsCollections.find().toArray();

  client.close()

  // console.log(meetups);

  const meetups_cleaned = meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
  }))
  
  // console.log(meetups_cleaned) 

  // Return props
  return {
    props: {
      meetups: meetups_cleaned,
    },
    revalidate: 1,
  };
}

export default HomePage;
