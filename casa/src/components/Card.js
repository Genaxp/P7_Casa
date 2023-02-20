import React from "react";
import { Link } from "react-router-dom"

const Card = ({ data }) => {
    return (

        <div className="card">
            < Link
                to="/Detail"
                state={{ logementId: data.id }}
            >
                <img src={data.cover} alt="show home" />
                <div className="card__title">
                    <h4> {data.title}</h4>
                </div>
            </Link>
        </div>
    )
}

export default Card;