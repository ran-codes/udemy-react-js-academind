import  Link  from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-is-good">NextJS is best</Link>
        </li>
        <li>
          <Link href="/news/seiomthing">SOmethign else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
