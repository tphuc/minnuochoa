

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => {
    return Promise.resolve([
        {
            "id": "Z2lkOi8vc2hvcGlme",
            "name": "TomFord",
            "vendor": "Next.js",
            "price": { "value": 25, "currencyCode": "USD" },
            "descriptionHtml": "<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>",
            "images": [
                {
                    "url": "/assets/drop-shirt-0.png",
                },
                {
                    "url": "/assets/drop-shirt-1.png",
                },
                {
                    "url": "/assets/drop-shirt-2.png",
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
            "lifestyle": "Nam tính, vui vẻ, độc lập",
            "gender": "Nam",

        },
        {
            "id": "Z2lk123123123",
            "name": "Fierce",
            "vendor": "Next.js",
            "price": { "value": 25, "currencyCode": "USD" },
            "descriptionHtml": "<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>",
            "images": [
                {
                    "url": "/assets/drop-shirt-0.png",
                },
                {
                    "url": "/assets/drop-shirt-1.png",
                },
                {
                    "url": "/assets/drop-shirt-2.png",
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
            "lifestyle": "Nam tính, vui vẻ, độc lập",
            "gender": "Nam",

        },
    ])
}


export default function useProducts() {
    const { data, error } = useSWR(`/products`, fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
