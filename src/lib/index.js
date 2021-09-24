
import {

    useLocation
  } from "react-router-dom";
const getSlug = (path) => path.replace(/^\/|\/$/g, '')


const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export {
    getSlug,
    useQuery,
    formatNumber
}