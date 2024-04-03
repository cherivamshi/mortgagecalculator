import React from "react";

const input  = ({type,id,value,min,max,onChange}) => {
    return(
        <input
        type={type}
        id={id}
        value={value}
       min={min}
       max={max}
        onChange={(e) => onchange(parseFloat(e.target.value))}
    />
    );
};
export default input;