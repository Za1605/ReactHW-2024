import axios from "axios";
import {baseURL} from "../Constants/url";

const axiosServise = axios.create({baseURL})

export {
    axiosServise
}