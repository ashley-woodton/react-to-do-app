import React from 'react'

const List = (props) =>{
    return(
        <ul>
            {
                //.notes is from app.js .map is like a for loop
                props.notes.map((note, index)=> 
                <li key = {index}>{note}</li>
                )
            }
        </ul>
    )
}


export default List