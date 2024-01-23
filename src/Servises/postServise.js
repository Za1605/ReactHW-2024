import {axiosServise} from "./axiosServise";
import {urls} from "../Constants/url";


const postServise = {

    getAll:() => axiosServise.get(urls.posts.base),
    getById:(id) => axiosServise.get(urls.posts.byId(id))
}

export {
    postServise
}