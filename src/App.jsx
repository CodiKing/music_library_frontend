import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search_Bar from './Search_Bar';
import Display_Music from './Display_Music';
import Add_New_Song from './Add_New_Song';
import DeleteASong from './Delete_A_Song';
function App() {
  const [songs, getSongs] = useState([])

  useEffect(()=>{
      getAllSongs();
  })
  
  async function getAllSongs(){
      let response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log('getAllSongs Response',response.data)
      getSongs(response.data);
    
  };
  async function createNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/',newSong);
    if(response.status ===201){
      await getAllSongs();
    }
  };
  async function deleteSong(songToDelete){
    let response = await axios.delete('http://127.0.0.1:8000/api/music/',songToDelete);
    if(response.status ===204){
      await getAllSongs();
    }
  };
  return (
    <div>
      <header>
        <h2>
          Music Library!
        </h2>
      <Search_Bar></Search_Bar>
      <h2>Add a New Song Here!</h2>
      <Add_New_Song newSongEntry={createNewSong}/>
      </header>
      <body>
      <Display_Music songEntries={songs}/>
      </body>
      <footer>
      <DeleteASong songDeletion={deleteSong}/>
      </footer>
    </div>
  );
}

export default App;
