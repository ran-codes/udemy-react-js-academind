import { MongoClient, ObjectId } from 'mongodb';

import { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  console.log(MeetupDetails);
  console.log(props);
  return (
    <Fragment>
      <MeetupDetail
        id={props.meetupData.id}
        img={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  // fetch data from API
  const client = await MongoClient.connect(
    'mongodb+srv://ranli2011:mangobub12@cluster0.lucol.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find({},{_id:1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({ params: {meetupId: meetup._id.toString()}})),
  };
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;

  // fetch data from API
  const client = await MongoClient.connect( 'mongodb+srv://ranli2011:mangobub12@cluster0.lucol.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollections = db.collection('meetups');

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });
  console.log("**************selectedMeetup");
  console.log(meetupId);
  console.log(selectedMeetup);

  client.close();
  
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      },
    },
  };
}

export default MeetupDetails;
