import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {ToastContainer} from 'react-toastify';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ToastContainer
            position={"bottom-center"}
            bodyClassName={"toastBody"}
            autoClose={1600}
        />
        <App/>
    </React.StrictMode>
);
