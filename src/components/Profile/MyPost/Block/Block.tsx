import React from 'react';
import './Block.css';


export const Block = () =>{
    return(
        <div className='block'>
            <textarea >your news...</textarea>
            <div className="block_button">
                <button className="button">Add Post</button>
            </div>
        </div>
    )
}