import React from "react";
import './AuthorStyle.css'
import one from '../../image/11.png'
import two from '../../image/12.png'
import three from '../../image/13.png'
import four from '../../image/14.png'
import five from '../../image/15.png'
import six from '../../image/16.png'

export default function Author(){
const AuthorData = [
    {
        image : one,
        author: 'Adam L.G. Nevill'
    },{
        image : two,
        author: 'Brian Christian' 
    },{
        image : three,
        author: 'Jone van Dijk' 
    },{
        image : four,
        author: 'Walter Isaacson' 
    },{
        image : five,
        author: 'Ashlee Vance' 
    },{
        image : six,
        author: 'Daniel Chamovitz' 
    },
];
    return (
        <div className="class-author">
            <p className="auth">Authors</p>
            <div className="all-author">
                {AuthorData.map((data , index)=>{
                    return(
                        <div className="author-data" key={index}>
                            <div className = "user-picture" style={{backgroundImage:`url(${data.image})`}}></div>
                            <p className = "author-name">{data.author}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}