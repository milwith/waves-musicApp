import React, { useState, useRef } from "react";
//import styles
import "./styles/app.css";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //ref
  const audioRef= useRef(null);
 //state
 const[songs,setSongs]=useState(data());
 const[currentSong, setCurrentSong] =useState(songs[0]);
 const[isPlaying, setIsPlaying]=useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime:0,
    duration:0,
    animationPercentage:0,
});
const [libraryStatus, setLibraryStatus] = useState(false);
const timeUpdateHandler = (e)=>{
  const current=e.target.currentTime;
  const duration=e.target.duration;
  //calculate percentage
  const roundedCurrent=Math.round(current);
  const roundedDuration=Math.round(duration);
  const animationPercentage=Math.round((roundedCurrent / roundedDuration)*100);

  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage : Animation,});
};
  return (   
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong= {currentSong} />
      <Player 
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      songs={songs}
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}
      />
      <Library 
       songs={songs}
       setCurrentSong={setCurrentSong}
       audioRef={audioRef}
       isPlaying={isPlaying}
       setSongs={setSongs}
       libraryStatus={libraryStatus}
       />
      <audio 
              onTimeUpdate={timeUpdateHandler}
              onLoadedMetadata={timeUpdateHandler}
              ref={audioRef} 
              src={currentSong.audio}
              ></audio>
    </div> 
  );
}

export default App;
 