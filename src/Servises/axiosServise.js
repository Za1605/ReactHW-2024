import axios from "axios";
import {baseURL} from "../Contstsnts/url";

const axiosServise = axios.create({baseURL})

export {
    axiosServise
}