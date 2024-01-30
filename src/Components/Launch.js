import React from 'react';

const Launch = ({launch}) => {
    const {mission_name,launch_year }= launch
    return (
        <div>
            <div>mission_name:{mission_name} </div>
            <br/>
            <div>launch_year :{launch_year}</div>
        </div>
    );
};

export default Launch;