import React from 'react';
import Song from './Song.js'
import Grid from '@material-ui/core/Grid';
import './Playlist.css'
import './Indicator.css'

import SoundCloudAudio from 'soundcloud-audio';

const CID = 'a0f84e7c2d612d845125fb5eebff5b37';
const scPlayer = new SoundCloudAudio(CID);

class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            data : null,
            currentPLaying : -1,
        }
    }

    componentDidMount(){
        fetch(this.props.link)
            .then(res => res.json())
            .then(result=>{
                this.setState({
                    data : [...result.collection],
                    isLoading : false,
                })
            })
    }


    setCurrentPlaying(ind){
        console.log("Changing key from : "+this.state.currentPLaying+" to " + ind);
        this.setState({
            currentPLaying : ind,
        })

        if(ind === -1){
            scPlayer.pause();
        }else{
            scPlayer.play({
                streamUrl : this.state.data[ind].uri +'/stream',
            })
        }
    }

    updatePlayer(){
        if(this.state.currentPLaying === -1){
            scPlayer.pause();
        }else{
            scPlayer.play({
                streamUrl : this.state.data[this.state.currentPLaying].uri +'/stream',
            })
        }
    }

    renderSong = (songData,ind)=>{
        return(
            <Grid item cols={6} key={ind}>
                <Song data={songData}  
                      keyy = {ind}
                      playSong={ind === this.state.currentPLaying}
                      setCurPlay={(i) => this.setCurrentPlaying(i)}/>
            </Grid>        
        )
    }

    toggleMusic(){
        console.log("called toggle playing : "+this.state.currentPLaying)
        this.setState(
            {currentPLaying: this.state.currentPLaying === -1?
                Math.floor(Math.random()*(this.state.data.length-2)):-1,
            }
        )
        this.updatePlayer();
    }

    render(){
        if(this.state.isLoading){
            return (
                <div style={{paddingTop:'200px'}}>
                <div className="lds-ellipsis">
                    <div></div><div></div><div></div><div></div></div>
                </div>
        )}

        return (
            <div className = 'Playlist'>
                <Grid  style={{justifyContent:'center'}}container spacing={1}>
                    {//<FlatList  list={this.state.data} renderItem={this.renderSong}/>
                    }
                    {this.state.data.map((dat,ind)=>        
                        <Grid item cols={6} key={ind}>
                            <Song data={dat}  
                                  keyy = {ind}
                                  playSong={ind === this.state.currentPLaying}
                                  setCurPlay={(i) => this.setCurrentPlaying(i)}/>
                        </Grid>        
                    )}
                </Grid>

                <div style={{display:'flex', flexDirection:'row',backgroundColor:'black',
                            height:'50px',
                            position:'fixed',bottom:'0',left:'0',width:'100%'}}>

                    <div style={{paddingLeft:'20px',color:'#fff',justifyContent:'flex-start',width:'30%',
                                alignSelf:'center'}}>
                        {this.state.currentPLaying === -1 ? "":
                        this.state.data[this.state.currentPLaying].title}
                    </div>
                    <div style={{alignSelf:'center',justifyContent:'center',marginLeft:'20%'}}
                        onClick={()=>this.toggleMusic()}>
                        {this.state.currentPLaying !== -1?
                            <img alt="Play" src="pause-xxl.png" height='25px' width='25px'/>   
                           :<img alt="Play" src="play-xxl.png" height='25px' width='25px'/>   
                        } 
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Playlist;