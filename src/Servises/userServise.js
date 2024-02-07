import {axiosServise} from "./axiosServise";
import {urls} from "../constants/Urls";



const userServise = {
    getAll:() => axiosServise.get(urls.users),
    create:(data)=> axiosServise.post(urls.users, data)

}

export {
    userServise
}