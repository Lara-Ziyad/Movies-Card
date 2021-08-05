import React from 'react';

const Movie = ( props ) => {

    console.log(props.click, props.name, props.age,props.changed)

    const mymovie = {
        width: "60%",
        margin: "16px auto",
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "orange"
      };


      
    return (
        <div style={mymovie}>
            <p onClick={props.click}>Movie name: {props.name} | the year: {props.age} </p>
           {/*  <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    )
};

export default Movie;