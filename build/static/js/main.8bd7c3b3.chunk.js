(this["webpackJsonpsoundcloud-420rmx"]=this["webpackJsonpsoundcloud-420rmx"]||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),s=n.n(r),l=(n(24),n(25),n(26),n(10),n(17)),o=n(5),c=n(6),u=n(8),d=n(7),m=n(14),p=n.n(m),h=(n(27),new p.a("a0f84e7c2d612d845125fb5eebff5b37")),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isPlaying:!1,fistTime:!0},a}return Object(c.a)(n,[{key:"playSong",value:function(){h.play({streamUrl:this.props.data.uri+"/stream"}),this.setState({isPlaying:!0,fistTime:!1})}},{key:"pauseSong",value:function(){h.pause(),this.setState({isPlaying:!1})}},{key:"togglePlay",value:function(){this.props.keyy===this.props.currentPlaying?this.state.isPlaying&&(this.setState({isPlaying:!1}),h.pause(),this.props.setCurPlay(-1)):this.state.isPlaying?h.pause():(this.props.setCurPlay(this.props.keyy),h.play({streamUrl:this.props.data.uri+"/stream"}),this.setState({isPlaying:!0}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Song"},i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("img",{src:this.props.data.artwork_url,style:{padding:"3px",width:"100%",borderRadius:"5px"}})),i.a.createElement("div",{style:{overflow:"hidden",textOverflow:"...."}},i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("p",null,"Artist : "+this.props.data.user.username)),i.a.createElement("div",{style:{textAlign:"left",width:"130px",whiteSpace:"nowrap"}},i.a.createElement("p",{className:"Font",style:{fontSize:"13px"}},this.props.data.title))),i.a.createElement("div",{style:{align:"bottom"}},this.state.isPlaying?i.a.createElement("img",{src:"icons8-pause-24.png",width:"30px",height:"30px",onClick:function(){return e.togglePlay()}}):i.a.createElement("img",{src:"icons8-circled-play-30.png",width:"35px",height:"35px",onClick:function(){return e.togglePlay()}})))}}]),n}(i.a.Component),g=n(15),f=n.n(g),v=n(57),E=(n(40),n(41),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).renderSong=function(e,t){return i.a.createElement(v.a,{item:!0,cols:6,key:t},i.a.createElement(y,{data:e,keyy:t,currentPlaying:a.state.currentPLaying,setCurPlay:function(e){return a.setCurrentPlaying(e)}}))},a.state={isLoading:!0,data:null,currentPLaying:-1},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.link).then((function(e){return e.json()})).then((function(t){e.setState({data:Object(l.a)(t.collection),isLoading:!1})}))}},{key:"setCurrentPlaying",value:function(e){console.log("Changing key from : "+this.state.currentPLaying+" to "+e),this.setState({currentPLaying:e})}},{key:"render",value:function(){return this.state.isLoading?i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)):i.a.createElement("div",{className:"Playlist"},i.a.createElement(v.a,{style:{justifyContent:"center"},container:!0,spacing:1},i.a.createElement(f.a,{list:this.state.data,renderItem:this.renderSong})),i.a.createElement("div",{style:{position:"fixed",bottom:"0",left:"0",width:"100%"}},i.a.createElement("div",{style:{width:"100%",height:"50px",backgroundColor:"black",color:"green",fontSize:"30px"}},-1==this.state.currentPLaying?"":this.state.data[this.state.currentPLaying].title)))}}]),n}(i.a.Component));var P=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"Header"},i.a.createElement("h1",null,"Soundcloud rmx")),i.a.createElement("div",{className:"Contents"},i.a.createElement(E,{link:"https://api.soundcloud.com/users/185676792/favorites?client_id=a0f84e7c2d612d845125fb5eebff5b37&limit=60&linked_partitioning=1"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8bd7c3b3.chunk.js.map