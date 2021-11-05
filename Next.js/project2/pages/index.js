

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
  return {
    props: {
      meetups: [
        {
          id: 'm1',
          title: 'first meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
          address: '342432 Some road, city, country',
          description: 'fdsf',
        },
        {
          id: 'm2',
          title: 'sec meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
          address: '342432 Some road, city, country',
          description: 'fdsf'
        },
      ],
    },
  };
}

export default HomePage;
