import {axiosServise} from "./axiosServise";
import {urls} from "../constants/Urls";


const userServise = {
    getAll:()=> axiosServise.get(urls.users),
    create:(user)=> axiosServise.post(urls.users, user)

}