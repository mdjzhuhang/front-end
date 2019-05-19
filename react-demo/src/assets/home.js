import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Linkdemo from './linkdemo'
import Formdemo from './formdemo'

function BasicExample() {
  return (
    <Router>
      <div style={{padding: "36px 30px"}}>
        <ul className='section'>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/formdemo">form-list-example</Link>
          </li>
          <li>
            <Link to="/linkdemo">link-route-example</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/formdemo" component={Formdemo} />
        <Route path="/linkdemo" component={Linkdemo} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p> create-react-app 创建项目，node_modules文件夹的 react-scripts 的 config 目录中找 webpack 配置文件</p>
    </div>
  );
}

export default BasicExample;
