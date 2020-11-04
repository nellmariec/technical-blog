import contentLoaded from 'content-loaded';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './imports/App';
import AlgoliaNetlify from './imports/algoliasearchNetlify';

ReactDOM.render(<App />, document.getElementById('search'));

contentLoaded().then(() => {
    AlgoliaNetlify
 });