import React from 'react'
import ReactDOM from 'react-dom'

import { MainContainer } from './components/main-container'
import './css/style.css'

const customStyle = document.createElement('style')
customStyle.id = 'style'
document.head.appendChild(customStyle)

ReactDOM.render(<MainContainer />, document.getElementById('root'))
