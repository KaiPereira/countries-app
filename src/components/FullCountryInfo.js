import React from "react"
import {Link} from "react-router-dom"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function FullContryInfo(props) {
    const [data, dataChange] = React.useState({name: "bad"})
    let countryCode = useParams()
    let countryBorders = [];
    const backgroundStyle = props.mode ? { background: "hsl(209, 23%, 22%)"} : {background : '#fff'}
    const colorStyle = props.mode ? { color: "#fff"} : {color : '#000'}

    React.useEffect(() => {
          fetch(`https://restcountries.com/v3.1/alpha/${countryCode.countryCode}`)
            .then(res => res.json())
            .then(apiData => dataChange(apiData))
      }, [countryCode])

      if (data.name !== "bad") {
          if (data[0].languages) {
            var languages = Object.keys(data[0].languages).map(keys => {
                return data[0].languages[keys].replace("", " ")
            })
          }
        if (data[0].currencies) {
            var currencies = Object.keys(data[0].currencies).map(keys => {
                return data[0].currencies[keys].name.replace("", " ")
            })
        }
        if (data[0].borders) {
            countryBorders = data[0].borders.map(apiData => {
                return (
                    <Link to={`/${apiData}`}>
                        <div className="borderCountry" style={backgroundStyle}><p style={colorStyle}>{apiData}</p></div>
                    </Link>
                )
            })
        }
      }

    return (
        <>
        {data.name !== "bad" ? (
        <div className="countryInfoWrapper">
                <div className="backButton" style={backgroundStyle}>
                    <Link to="/" className="backLink" style={colorStyle}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p className="backText">Back</p>
                    </Link>
                </div>
            <div className="countryExtraDetails">
                <div className="countryExtraDetailImageContainer">
                <img src={data[0].flags.png} className="countryExtraDetailImage"/>
                </div>
                <div className="countryExtraDetailsInfo">
                    <div className="extraInfoPadding">
                        <h1 className="countryExtraDetailsName" style={colorStyle}>{data[0].name.common && data[0].name.common}</h1>
                        <div className="extraInfo">
                            <div className="elementsRow1">
                                <p className="extraInfoElementHeader" style={colorStyle}>Native Name: <span className="extraInfoElementDetails">{data[0].name.nativeName && Object.values(data[0].name.nativeName)[0].common}</span></p>
                                <p className="extraInfoElementHeader" style={colorStyle}>Population: <span className="extraInfoElementDetails">{data[0].population && data[0].population}</span></p>
                                <p className="extraInfoElementHeader" style={colorStyle}>Region: <span className="extraInfoElementDetails">{data[0].region && data[0].region}</span></p>
                                <p className="extraInfoElementHeader" style={colorStyle}>Sub Region: <span className="extraInfoElementDetails">{data[0].subregion && data[0].subregion}</span></p>
                                <p className="extraInfoElementHeader" style={colorStyle}>Capital: <span className="extraInfoElementDetails">{data[0].capital && data[0].capital[0]}</span></p>
                            </div>
                            <div className="elementsRow2">
                                <p className="extraInfoElementHeader" style={colorStyle}>Top Level Domain: <span className="extraInfoElementDetails">{data[0].tld && data[0].tld[0]}</span></p>
                                <p className="extraInfoElementHeader" style={colorStyle}>Currencies: <span className="extraInfoElementDetails">{currencies}</span></p>
                                <p className="extraInfoElementHeader" style={colorStyle}>Languages: <span className="extraInfoElementDetails">{languages}</span></p>
                            </div>
                        </div>
                        <div className="borderCountries">
                            {data[0].borders && <p className="extraInfoBorderCountriesText" style={colorStyle}>Border Countries: </p>}
                            {countryBorders}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <div></div>
        )}
        </>
    )
}