import React from "react";
import { playAudio } from "../util";
  
const LibrarySong=({song,songs,setCurrentSong,id,audioRef, isPlaying,setSongs,}) =>{
    const songselectHandler=() =>{
         const selectedSong = songs.filter((state) =>state.id === id);
            setCurrentSong(selectedSong[0]);
            //Add active state
            const newSongs = songs.map((song) =>{
              if(song.id ===id){
                  return{
                      ...song,
                      active:true,
                  };
              }else{
                  return{
                      ...song,
                      active:false,
                  };
              }
            });
            setSongs(newSongs);
           //check if the song is playing
         playAudio(isPlaying,audioRef);
        };
    return(
         <div onClick={songselectHandler} className={`library-song ${song.active ? 'selected' : "" }`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-descriotion">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
         </div>
    );
};

export default LibrarySong;