

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => {
    return Promise.resolve([
        {
            label: "Mới nhất",
            value: 'timestamp',
            id: '1',
        },
        {
            label: "Giá cao xuống thấp",
            value: 'desc',
            id: '2',
        },
        {
            label: "Giá thấp xuống cao",
            value: 'asc',
            id: '3',
        },
        
    ])
}


export default function useSorts() {
    const { data, error } = useSWR(`/sort`, fetcher)

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
