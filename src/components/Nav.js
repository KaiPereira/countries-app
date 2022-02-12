import React from "react"

export default function Nav(props) {
    const backgroundStyle = props.mode ? { background: "hsl(209, 23%, 22%)"} : {background : '#fff'}
    const colorStyle = props.mode ? { color: "#fff"} : {color : '#000'}
    return (
        <>
            <nav className="nav" style={ backgroundStyle }>
                <a className="header" style={ colorStyle }>Where in the world?</a>
                <button className="changeMode" onClick={props.handleClick} style={colorStyle}>
                    { props.mode ? <i className="far fa-moon"></i> : <i className="far fa-sun"></i>}
                    <p className="modeText">Dark Mode</p>
                </button>
            </nav>
        </>
    )
}