import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.tsx'
import "./i18n.tsx";


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<h5 style={{textAlign:'center'}}> Loading </h5>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)

