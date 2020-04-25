import React from 'react';
import './App.css';
import './Header.css';
import './Font.css'
import Playlist from './Playlist.js'

function App() {
    return (
        <div className="App">
            <div className="Header">
                <h1 >Soundcloud rmx</h1>
            </div>
            <div className = "Contents">
                <Playlist link = 'https://api.soundcloud.com/users/185676792/favorites?client_id=a0f84e7c2d612d845125fb5eebff5b37&limit=60&linked_partitioning=1'/>
            </div>
        </div>
    );
}

export default App;

