
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
    return { label, price: parseFloat(price)}
}


const totalprice = (cart) => {
    if (!cart) {
        return 0;
    }
    var total = 0;
    cart?.map(item => { total += parseLabelPrice(item?.variantSelected?.label)?.price * item.amount })

    return total
}





export {
    getSlug,
    useQuery,
    formatNumber,
    parseLabelPrice,
    findIdByLabel,
    totalprice
}