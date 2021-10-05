import { Page, Spinner, Tabs, Grid, Card, Text, Button, Input, Image, useTheme, Spacer } from '@geist-ui/react';
import { Minus, Navigation, Plus, ShoppingBag, X } from '@geist-ui/react-icons';
import Cookies from 'js-cookie';

import React from 'react';
import useCart from '../../../swr/cart';





export default function CheckoutItem({
    data,
    ...props
}) {

    const { data: cart, } = useCart()
    return <div style={{ marginTop: 5 }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "left" }}>
            <Image margin={0} width={'100px'} height={'100px'} src={data?.images[0].url} />
            <div>
                <Text margin={0} h4 >{data?.name}</Text>
                <Text margin={0} type='secondary' p>{data?.variantSelected?.price} đ</Text>
                <Text margin={0} type='secondary' h4>x {data?.amount}</Text>
            </div>

        </div>
    </div>

}

