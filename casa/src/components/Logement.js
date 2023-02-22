import React from "react"
import logements from "./logements"
import Card from "./Card"

function LogementList() {
    return (
        <div className="grid">
            {logements.map((logement, index) => (
                <Card key={index} data={logement} />
            ))}
        </div>
    )
}
export default LogementList