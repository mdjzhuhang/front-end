import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Linkdemo({ match }) {
  return (
    <div>
      <ul className='section'>
        <li>
          <Link to={`${match.url}/React-router`}>React-router</Link>
        </li>
        <li>
          <Link to={`${match.url}/React-router-dom`}>React-router-dom</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a Link.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  let text;
  if (match.params.topicId === 'React-router') {
    text = 'React-router:实现了路由的核心功能';
  } else {
    text = 'react-router-dom: 基于react-router，加入了在浏览器运行环境下的一些功能，例如：Link组件，会渲染一个a标签，Link组件源码a标签行; BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用window.location.hash和hashchange事件构建路由。';
  }

  return <p>{text}</p>
}

export default Linkdemo;
