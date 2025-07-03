import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.tsx'
import "./i18n.tsx";
import { FiLoader } from "react-icons/fi";


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<h1 style={{textAlign:'center'}}> <FiLoader /> </h1>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)

