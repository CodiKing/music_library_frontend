import React, { useState,useEffect } from 'react';


const Display_Music=(props)=>{
    const [postData, setPostData] =useState([])

    useEffect(() =>{
      let tempPostData=props.songEntries.map(entry =>{
        return [entry.id, entry.title, entry.artist, entry.album, entry.release_date, entry.genre]
      });
      setPostData(tempPostData);
  
    }, [props.songEntries])
    return(
    <table>
        <th>ID</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Release Date</th>
        <th>Genre</th>
    </table>
      
    )
}

export default Display_Music;


