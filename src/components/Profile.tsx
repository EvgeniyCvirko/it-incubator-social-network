import React from 'react';

export const Profile = () =>{
    return(
        <div className='content'>
            <div><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/></div>
            <div className="conteiner">
                <div className="conteiner-header">
                    <div className="conteiner-header-foto"><img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""/></div>
                    <div className="conteiner-header-infa">
                        <p>Evgeniy Cvirko</p>
                        <p>Data of Birth: 6 may</p>
                        <p>City: Minsk</p>
                        <p>Education: BSUIR, 13</p>
                    </div>
                </div>
                <div className="conteiner-middle">
                    <p>My post</p>
                    <input type="text"/>
                    <div><button>Send</button></div>
                </div>
                <div className="conteiner-footer">
                    <div className='circle'></div>
                    <span>Hi, why nobody love me?</span>
                </div>
            </div>
        </div>
    )
}
