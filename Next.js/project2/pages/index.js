import MeetupList from '../components/meetups/MeetupList';

import { Fragment } from 'react';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
    address: '342432 Some road, city, country',
  },
  {
    id: 'm2',
    title: 'sec meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/320px-Stadtbild_M%C3%BCnchen.jpg',
    address: '342432 Some road, city, country',
  },
];

function HomePage() {
  return (
    <Fragment>

        <MeetupList meetups={DUMMY_MEETUPS} />

    </Fragment>
  );
}

export default HomePage;
