
import React from 'react';
import {Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化


import Lists from './Lists'

const List = ({ match }) => (
    <div>
        <h2>我是一个列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/我是第一个哈哈`}>
                    列表下边的第一个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第二个呵呵`}>
                    列表下边的第二个
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/我是第三个嘿嘿`}>
                    列表下边的第三个
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:ListsId`} component={Lists}/>
        <Route exact path={match.url} render={() => (
            <h3>点击上边的列表项此处显示与url地址一样的...</h3>
        )}/>
    </div>
)

export default List;