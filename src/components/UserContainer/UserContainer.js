import React,{useEffect,useState} from 'react';
import UsForm from "./UsForm";
import Users from "./Users";
import {userServise} from "../../Servises/userServise";


const UserContainer = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userServise.getAll().then(({data}) => setUsers(data))
    },[]);
    return (
        <div>
         <UsForm />
            <br/>
            <Users users={users} />
        </div>
    );
};

export default UserContainer;