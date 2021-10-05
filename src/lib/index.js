
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

function findIdByLabel(array, label){
   let item = array.find(item => item.label === label)
   return  item ? item.id : null
} 

const parseLabelPrice = (string) => {
    if(!string) return {}
    const [label, price] = string.split('-')
    return { label, price}
}


export {
    getSlug,
    useQuery,
    formatNumber,
    parseLabelPrice,
    findIdByLabel
}