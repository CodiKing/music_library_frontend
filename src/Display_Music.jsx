


const Display_Music = (props)=>{
    return(
    <table>
        <thread>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>   
            <th>Release Date</th>   
            <th>Genre</th>   
        </tr>   
        </thread>
        <tbody>
        {props.songEntries.map((song,index) =>{
            return(
            <tr>
                <td>{index +1}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
               
                    
            </tr> 
          
            )
        })}


        </tbody>
    </table>
    )
}

export default Display_Music;


