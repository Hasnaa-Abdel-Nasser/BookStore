import React from "react";
import Book from './BookData'
import TextRating from '../RatingUI/Rating';
import './BookBoxStyle.css';
import one from '../../image/6.jpg';
import two from '../../image/5.jpg';
import three from '../../image/7.jpg';
import four from '../../image/8.jpg';
import five from '../../image/9.jpg';
import six from '../../image/10.jpg';

export default function Books(){
    const image = [one , two,three,four,five,six];
    return (
        <div className="books">
            <p className = "header">Browse</p>
            <div className="all-books">
            {Book.map((data, index) =>{
                    return(
                        <div className="bookCard" key={index}>
                            <div className = "book-image" style={{backgroundImage: `url(${image[index]})`}}>
                            </div>
                            <div className="data">
                                <div>
                                    <p className = "name-book">{data.name}</p>
                                    <p className = "name-author">By {data.By}</p>
                                </div>
                                <TextRating />
                                <button>Buy</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}