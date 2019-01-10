import React from "react";

function CharacterImage(props) {
    return (
        <img alt={props.name} className="img-fluid" src={props.image} onClick={props.onclick} />
    );
}

export default CharacterImage;