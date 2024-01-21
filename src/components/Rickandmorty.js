import React from 'react';

const Rickandmorty = (props) => {
    let {id, name, status, gender, species, image}= props;
    return (
        <div>
         <h1>{id} {name}</h1>
            <h3>{status} {gender}</h3>
                    <p>{species}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Rickandmorty;