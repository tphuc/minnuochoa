const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const parseLabelPrice = (string) => {
    if(!string) return {}
    const [label, price, discountPrice] = string.split('-')
    return { label, price: parseFloat(price), discountPrice: parseFloat(discountPrice)}
}


const totalprice = (cart) => {
    if (!cart) {
        return 0;
    }
    var total = 0;
    cart?.map(item => { total += parseLabelPrice(item?.variant?.label)?.price * item.amount })

    return total
}



export {
    formatNumber,
    useQuery,
    parseLabelPrice,
    totalprice
}