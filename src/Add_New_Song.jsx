import React, { useState } from 'react';


const Add_New_Song = (props) => {
    const[title,setTitle]=useState();
    const[artist,setArtist]=useState();
    const[album,setAlbum]=useState();
    const[release_Date,setRelease_Date]=useState();
    const[genre,setGenre]=useState();

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title:title,
            artist:artist,
            album:album,
            release_date:release_Date,
            genre:genre,
        };
        props.newSongEntry(newSong)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='title' value={title} onChange={(event)=> setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type='artist' value={artist}onChange={(event)=> setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='album' value={album}onChange={(event)=> setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={release_Date}onChange={(event)=> setRelease_Date(event.target.value)}/>
            <label>Genre</label>
            <input type='genre' value={genre}onChange={(event)=> setGenre(event.target.value)}/>
            <button type='submit'>Add New Song</button>


        </form>


      );
}
 
export default Add_New_Song;