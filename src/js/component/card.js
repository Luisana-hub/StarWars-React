import React from "react";
import imgCard from "../../img/ImgCard400x200.png";
import PropTypes from "prop-types";
import { AiOutlineHeart } from 'react-icons/ai';

export const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={imgCard} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">TEXT</p>
                <a href="#" className="btn btn-primary"> <AiOutlineHeart /> </a>
            </div>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.any
};