import React from "react";

const Input  = ({type,id,value,min,max,onChange}) => {
    return(
        <input
        type={type}
        id={id}
        value={value}
       min={min}
       max={max}
        onChange={(e) => onChange(parseFloat(e.target.value))}
    />
    );
};
export default Input;