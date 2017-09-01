import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化
// import Button from './Button';
// import Dialog from './Dialog';
// import News from './News';

import One from './module/One'
import Two from './module/Two'
import List from './module/List'
// import './style.css';

const RouterList = () => (
    <Router>
        <div>
            <Link to="/">首页</Link>
            <br/>
            <Link to="/two">第二页</Link>
            <br/>
            <Link to="/Lists">一个列表</Link>
            <br/>
            <Route exact path="/" component={One}/>
            <Route path="/two" component={Two}/>
            <Route path="/Lists" component={List}/>
        </div>
    </Router>
)
export default RouterList