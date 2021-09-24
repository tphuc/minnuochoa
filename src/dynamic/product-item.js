

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => {
    return Promise.resolve(
        {
            "id": "Z2lkOi8vc2hvcGlme",
            "name": "Killian Rolling in Love EDP",
            "vendor": "Next.js",
            "price": { "value": 25, "currencyCode": "USD" },
            "descriptionHtml": "<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>",
            "images": [
                {
                    "url": "https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_2.jpg",
                },
                {
                    "url": "https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_1.jpg",
                },
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplu70dSFKmcgD7oyLnXa1jC67xYKn9A6_ag&usqp=CAU",
                }
            ],
            "variants": [
                {
                    "price": 220000,
                    "name": "120ml"
                },
                {
                    "price": 570000,
                    "name": "720ml"
                }
            ],
            "origin": "Pháp",
            "style": "Nam tính, vui vẻ, độc lập",
            "gender": "Nam",

        },
    )
}


export default function useProductItemDetail() {
    const { data, error } = useSWR(`/products`, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
