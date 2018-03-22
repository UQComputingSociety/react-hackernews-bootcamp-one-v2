import React    from 'react';
import ReactDOM from 'react-dom';

import NewsFeed from './Views/NewsFeed';

const ARTICLES = [
  {
    by: 'Annie A',
    id: 1,
    title: 'Some Cool Techy Stuff',
    url: 'https://google.com',
  },
  {
    by: 'Diddy P',
    id: 2,
    title: 'Digital Rap',
    urk: 'https://google.com',
  },
  {
    by: 'Hoolio H',
    id: 3,
    title: 'Yeh Cool Keen',
    url: 'https://google.com',
  },
];

ReactDOM.render((
  <NewsFeed
    articles={ARTICLES}
  />
), document.getElementById('App'));
