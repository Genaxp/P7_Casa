import React from "react";
import { Link } from "react-router-dom"

const Card = ({ data }) => {
    return (
        < Link
            to="/Detail"
            state={{
                logementId: data.id
            }}

        >
            <div className="card">
                <img src={data.cover} alt="show home" className="img__cover" />
                <h4> {data.title}</h4>
            </div>
        </Link>
    )
}

export default Card;