import {useParams} from 'react-router-dom';
import React from 'react';
import YouTube from 'react-youtube';

export default function Video (){
    let {id} = useParams();


 function video(id){
  
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    function onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return <YouTube videoId={id} opts={opts} onReady={(event) => onReady(event)} />;
  }

    return <div>{video(id)}</div>
}