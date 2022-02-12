import React from "react"

export default function Main(props) {
    const [formData, setFormData] = React.useState(
        {firstName: ""}
    )

    const backgroundStyle = props.mode ? { background: "hsl(209, 23%, 22%)"} : {background : '#fff'}
    const colorStyle = props.mode ? { color: "#fff"} : {color : '#000'}
    const inputStyle = props.mode ? { background: "hsl(209, 23%, 22%)", color: "#fff"} : {background : '#fff', color: "#000"}
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    props.handleChange(formData.firstName)

    return (
        <main>  
            <div className="filter">
                <div className="shadow">
                    <div 
                    style={ backgroundStyle } 
                    className="search">
                        <i style={ colorStyle } class="fas fa-search"></i>
                    </div>
                    
                    <input 
                    type="text" 
                    placeholder="First Name" 
                    onChange={handleChange} 
                    name="firstName" 
                    value={formData.firstName} 
                    style={ inputStyle } 
                    className={props.mode ? "darkInput" : "lightInput"} 
                    placeholder="Seach for a country"/>
                
                </div>
                <div className="filterShadow" style={ backgroundStyle } >
                    <div className="controlledFilter" style={ colorStyle } >{props.regionFilter.length > 2 ? props.regionFilter : "Filter by Region"}</div>
                    <div className="filterSearch"><i style={ colorStyle } class="fas fa-chevron-down"></i></div>
                    <div className="filterDropdown" style={ backgroundStyle } >
                        <button onClick={() => props.changeRegion("Africa")} className={props.mode ? "darkRegion" : "region"} style={colorStyle}><p className="regionText">Africa</p></button>
                        <button onClick={() => props.changeRegion("America")} className={props.mode ? "darkRegion" : "region"} style={colorStyle}><p className="regionText">America</p></button>
                        <button onClick={() => props.changeRegion("Asia")} className={props.mode ? "darkRegion" : "region"} style={colorStyle}><p className="regionText">Asia</p></button>
                        <button onClick={() => props.changeRegion("Europe")} className={props.mode ? "darkRegion" : "region"} style={colorStyle}><p className="regionText">Europe</p></button>
                        <button onClick={() => props.changeRegion("Oceania")} className={props.mode ? "darkRegion" : "region"} style={colorStyle}><p className="regionText">Oceania</p></button>
                        <button onClick={() => props.changeRegion("")} className={props.mode ? "darkRegion" : "region"} style={colorStyle}><p className="regionText">None</p></button>
                    </div>
                </div>
            </div>
        </main>
    )
}