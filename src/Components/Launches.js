import React,{useEffect,useState} from 'react';
import {launchServise} from "../Servises/launchServise";
import Launch from "./Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const [launchDetails, setLaunchDetails] = useState(null)


    useEffect(() => {
       launchServise.getAll().then(({data})=> setLaunches(data))
    },[]);
    return (
        <div>
              <div>
                  {launches.map(launch => <Launch key = {launch.id} launch={launch})}
              </div>
        </div>
    );
};

export default Launches;