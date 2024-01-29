import {axiosServise} from "./axiosServise";
import {urls} from "../Contstsnts/url";


const launchServise = {

    getAll:()=> axiosServise.get(urls.launches),

}

export {
    launchServise
}