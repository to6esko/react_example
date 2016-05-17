import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import TODOList from './pages/TODOList';
import Demos from './pages/Demos';
import Archives from './pages/Archives';
import Comments from './pages/Comments';






const app = document.getElementById('app');
ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="todoList" name="todoList" component={TODOList}></Route>
            <Route path="demos" name="demos" component={Demos}></Route>
            <Route path="archives(/:article)" name="archives" component={Archives}></Route>
            <Route path="comments" name="comments" component={Comments}></Route>
        </Route>
    </Router>,
    app);