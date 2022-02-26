import React from 'react'
import ReactDOM from 'react-dom'

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Home from './pages/Home'
import Page404 from "./pages/Page404";
import Post from "./pages/Post"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Page404 />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)