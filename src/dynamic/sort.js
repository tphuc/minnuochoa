

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => {
    return Promise.resolve([
        {
            name: "Mới nhất",
            value: 'newest',
            id: '1',
        },
        {
            name: "Giá cao xuống thấp",
            value: 'desc',
            id: '2',
        },
        {
            name: "Giá thấp xuống cao",
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
