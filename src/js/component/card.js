import React from "react";
import imgCard from "../../img/ImgCard400x200.png"

export const Card = () => {
    return (
        <div className="card">
            <img className="card-img-top" src={imgCard} alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};