import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';
// import 'semantic-ui-css/semantic.min.css';
import './scss/style.scss';

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

const customStyle = document.createElement('style');
customStyle.id = 'style';
customStyle.rel = 'stylesheet';
document.head.appendChild(customStyle);

ReactDOM.render(<MainContainer />, document.getElementById('root'));
