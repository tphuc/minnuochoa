

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => {
    return Promise.resolve([
        {
            name: "Nước hoa nam",
            id: '2',
            path: 'nuoc-hoa-nam'
        },
        {
            name: "Nước hoa nữ",
            id: '3',
            path: 'nuoc-hoa-nu'
        },
        {
            name: "Giảm giá",
            id: '4',
            path: 'giam-gia'
        }
    ])
}


export default function useCategories() {
    const { data, error } = useSWR(`/category`, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
