import React from 'react';
import './Recommend.css';
import TextRating from '../RatingUI/Rating';
import books from './BookData.js';
import one from '../../image/1.jpg'
import two from '../../image/2.jpg'
import three from '../../image/3.jpg'
import four from '../../image/4.jpg'
import auth4 from '../../image/14.png'
function Recommend(){
    const image = [one , two , three , four]
    return(
        <>    
            <p className="for">For You</p>
            <div className="recommend">
                {books.map((data, index) =>{
                    return(
                        <div className="book" key={index} style = {{backgroundColor: data.color}}>
                            <div className = "book-image" id={index} style= {{backgroundImage: `url(${image[index]})`}}></div>
                            <div className="data">
                                <div>
                                    <p className = "name">{data.name}</p>
                                    <p className = "author">By {data.author}</p>
                                </div>
                                <TextRating />
                                <div className="personal">
                                    <div className = "user-picture" style={{backgroundImage:`url(${auth4})`}}></div>
                                    <div className = "user-picture" style={{backgroundImage:`url(${auth4})`}}></div>
                                    <div className = "users" style = {{color: data.color}}>+{data.customer}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Recommend;