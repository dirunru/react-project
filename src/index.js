// react 的入口文件 index.js ，渲染app

//引入入第三方模块不许要加点
import React from 'react';
import ReactDOM from 'react-dom';  //渲染必须要引入react-dom


//引入自定义的模块需要加点
import './index.css'; //css样式
import App from './App';//渲染app模块，需要引入app
import * as serviceWorker from './serviceWorker';

//将app组件渲染到index组件的div上
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();