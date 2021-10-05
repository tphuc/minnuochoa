

import Cookies from 'js-cookie'
import React from 'react'
import useSWR from 'swr'


const fetcher = (...args) => {
    let lineItems = JSON.parse(Cookies.get('cart') || '[]')
    return lineItems
}


export default function useCart() {
    const { data, error, mutate} = useSWR('/cart', fetcher)

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }
}
