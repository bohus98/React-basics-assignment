import React from "react";
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Excepteur eiusmod consequat qui anim. </p>
        </div>
    );
};

export default userOutput;