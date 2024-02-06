import React,{useEffect,useState} from 'react';
import UsForm from "./UsForm";
import Users from "./Users";
import {userServise} from "../../Servises/userServise";
import {urls} from "../../constants/Urls";

const UserContainer = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        userServis.(urls.users.base).then(value =>value.data).then(value => setUsers(value))
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