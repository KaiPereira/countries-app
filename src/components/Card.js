import React from "react"
import { Link } from "react-router-dom";

export default function Card(props) {
    const backgroundStyle = props.mode ? { background: "hsl(209, 23%, 22%)"} : {background : '#fff'}
    const colorStyle = props.mode ? { color: "#fff"} : {color : '#000'}
    return (
        <Link to={`/${props.data.cca3}`}>
            <div className="card" style={ backgroundStyle }>
                <img className="image" alt="contry flag" src={props.data.flags.png} />
                <div className="cardContent">
                    <p className="cardHeader" style={ colorStyle }>{props.data.name.common}</p>
                    <div className="cardInformation" style={ colorStyle }>
                        <p className="infoHeader">Population: <span className="infoInformation">{props.data.population}</span></p>
                        <p className="infoHeader">Region: <span className="infoInformation">{props.data.region}</span></p>
                        <p className="infoHeader">Capital: <span className="infoInformation">{props.data.capital}</span></p>
                    </div>
                </div>
            </div>
        </Link>
    )
}