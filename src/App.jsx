import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search_Bar from './Search_Bar';
import Display_Music from './Display_Music';

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

  return (
    <div>
      <header>
        <h3>
          Music Library!
        </h3>
      <Search_Bar></Search_Bar>
      </header>
      <body>
      <Display_Music songEntries={songs}/>
      </body>

    </div>
  );
}

export default App;
