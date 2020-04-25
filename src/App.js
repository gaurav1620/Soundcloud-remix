import React from 'react';
import './App.css';
import './Header.css';
import './Font.css'
import Playlist from './Playlist.js'

function App() {
    if(window.navigator.platform === "Linux armv8l"){alert("FLip your phone for better experience !")}
    return (
        <div className="App">
            <div className="Header">
                <div style={{flex:1}}><a href="https://github.com/gaurav1620/Soundcloud-remix"><img src="canvas.png" style={{height:'35px'}}/></a></div>
                <h3 style={{flex:1}}>Soundcloud rmx</h3>
                <h6 style={{flex:1}}>Search</h6>
            </div>
            <div className = "Contents">
                <Playlist link = 'https://api.soundcloud.com/users/185676792/favorites?client_id=a0f84e7c2d612d845125fb5eebff5b37&limit=60&linked_partitioning=1'/>
            </div>
        </div>
    );
}

export default App;

