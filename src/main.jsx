import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
import 'semantic-ui-css/semantic.min.css';
import './scss/style.scss';

const customStyle = document.createElement('style');
customStyle.id = 'style';
customStyle.rel = 'stylesheet';
document.head.appendChild(customStyle);

ReactDOM.render(<MainContainer />, document.getElementById('root'));
