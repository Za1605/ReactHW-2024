import axios from "axios";
import {baseURL} from "../constants/Urls";

const axiosServise = axios.create({baseURL});

export {
    axiosServise
}