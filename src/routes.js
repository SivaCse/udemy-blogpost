import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// nested routes are children and inorder to render them, the parent needs to determine where to render
// So in the App component, need to specify {this.props.children} in the place where to render child routes
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);