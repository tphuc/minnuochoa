import React from 'react';
import {  useTheme, Text } from '@geist-ui/react'
import Link from 'next/link'
import Image from 'next/image'

export default function BrandItem({
    data,
    ...props
}) {
    const theme = useTheme()
    return <Link passHref href={'/search'}>

        <div>
        <style jsx global>{`
                .image-container{
                    cursor: pointer;
                };
                .image-container > div{
                    transform: scale(1);
                    transition: 0.4s ease all;
                    border-radius: 50% !important;
                };
                .image-container > div > img{
                    transition: 0.4s ease all;
                };
                .image-container > div > img:hover{
                    transition: 0.4s ease all;
                    transform: scale(1.1625) !important;
                };
                .category-img{
                    border-radius: 50%;
 
                };
            `}</style>
            <div className='image-container' style={{ position: "relative", width: 200, height: 200, margin: 10, borderRadius:'50%', border: `2px solid ${theme.palette.accents_2}` }}>
                <Image  className='category-img' layout='fill' alt='-' style={{ borderRadius: '50%' }} width='100%' height='100%' src={data?.images[0]?.url}></Image>
            </div>
            <Text p style={{ textAlign: "center" }}>{data.label}</Text>

        </div>
    </Link>
}