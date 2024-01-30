import React,{useEffect,useState} from 'react';
import {launchServise} from "../Servises/launchServise";
import Launch from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);



    useEffect(() => {
        launchServise.getAll().then(({data}) => {
        const launch2006 = data.filter(value => value.launch_year !== '2006');
        setLaunches(launch2006)
    })
    },[]);
    return (
        <div>
              <div>
                  {launches.map(launch => <Launch key = {launch.launch_year} launch={launch}/>)}
              </div>
        </div>
    );
};

export default Launches