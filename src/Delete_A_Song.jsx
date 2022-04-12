import React, { useState } from 'react';


const DeleteASong = (props) => {
    const[id,deleteId]=useState();

    function handleSubmit(event){
        event.preventDefault();
        let deleteIt = {
            id:id,
        };
        props.songDeletion(deleteIt)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song ID to Delete</label>
            <input type='id' value={id} onChange={(event)=> deleteId(parseFloat(event.target.value))}/>
            <button type='submit'>Delete This!</button>
        </form>
    );
}
 
export default DeleteASong;