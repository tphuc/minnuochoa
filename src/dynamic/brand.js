

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => {
    return Promise.resolve([
        {
            name: "Calvin Klein",
            id: '1',

        },
        {
            name: "Nautica",
            id: '2',
 
        },
        {
            name: "Gianni Versace",
            id: '3',
     
        },
        {
            name: "TomFord",
            id: '4',

        }
    ])
}


export default function useBrands() {
    const { data, error } = useSWR(`/brand`, fetcher)

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
