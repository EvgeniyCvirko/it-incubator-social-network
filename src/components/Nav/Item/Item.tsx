import React from 'react';
import './Item.css';


export const Item = (props:any) =>{
    return(
            <div className='item'>
                <a href='/{props.item}'>{props.item}</a>
            </div>
    )
}