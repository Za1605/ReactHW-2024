import React from 'react';

const Simpson = (props) => {
    let{name,surname, age,photo }= props;
    return (
        <div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>age:{age}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;