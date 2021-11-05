import { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';
 
function MeetupDetails(props) {
  console.log(MeetupDetails);
  console.log(props);
  return (
    <Fragment>
      <MeetupDetail
        id={props.id}
        img={props.image}
        title={props.title}
        address={props.address}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  
  const meetupId = context.params.meetupId;


  return {
    props: {
      id: meetupId,
      title: 'first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
      address: '342432 Some road, city, country',
      description: 'A graty thing',
    },
  };
} 

export default MeetupDetails;
