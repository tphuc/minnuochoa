
import {

    useLocation
  } from "react-router-dom";
const getSlug = (path) => path.replace(/^\/|\/$/g, '')


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export {
    getSlug,
    useQuery
}