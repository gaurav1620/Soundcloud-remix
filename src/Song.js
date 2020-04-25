import React from 'react';
import './Song.css';
import './Font.css'

class Song extends React.Component{

    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { playSong: this.props.playSong };
    }

    togglePlay(){
        if(this.props.playSong){
            this.props.setCurPlay(-1);
        }else{
            this.props.setCurPlay(this.props.keyy);
        }
    }


    render(){
        //scPlayer.play({
        //    streamUrl : this.props.uri,
        //});
        return (
            <div className="Song">
                <div style={{width : '100%'}}>
                    <img alt="Slow internet Connection" src={this.props.data.artwork_url} style ={{padding:'3px',width:'100%',borderRadius:'5px'}}/>
                </div>

                <div style={{overflow:'hidden',textOverflow: "...."}}>
                    <div style={{textAlign:'left'}}>
                        <p>{"Artist : "+this.props.data.user.username}</p>
                    </div>
                    <div style={{textAlign:'left',width:'130px',whiteSpace:'nowrap'}}>
                        <p className="Font" style={{fontSize:'13px'}}>{this.props.data.title}</p>
                    </div>
                </div>


                <div style={{align:'bottom'}}>
                    {//<button onClick={() => this.playSong()}>play</button>
                    //<button onClick={() => this.pauseSong()}>pause</button>
                        //console.log("key : "+this.props.keyy+" has playsong prop as : "+this.props.playSong)
                    }
                
                {this.props.playSong ? 
                        <img alt = "Pause" src="icons8-pause-24.png" width="30px" height="30px" 
                            onClick={() => this.togglePlay()}/>
                        :<img alt ="Play" src="icons8-circled-play-30.png" width="35px" height="35px"
                            onClick={() => this.togglePlay()}/>
                    }
                </div>    
            </div>
        );
        
    }
}

export default Song;
