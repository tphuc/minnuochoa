import { Page, Spinner, Tabs, Grid, Card, Text, Button, Input, Image, useTheme, Spacer } from '@geist-ui/react';
import { Minus, Navigation, Plus, ShoppingBag, X } from '@geist-ui/react-icons';
import Cookies from 'js-cookie';

import React from 'react';
import { formatNumber, parseLabelPrice } from '../../../lib';
import useCart from '../../../swr/cart';





export default function CheckoutItem({
    data,
    ...props
}) {

    const { data: cart, } = useCart()
    return <div style={{ marginTop: 5 }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "left" }}>
            <Image margin={0} width={'100px'} height={'100px'} src={data?.images[0].url} />
            <div style={{marginLeft:5}}>
                <Text margin={0} h4 >{data?.label}</Text>
                <Text margin={0} type='secondary' p>{ parseLabelPrice(data?.variant?.label).label} { formatNumber(parseLabelPrice(data?.variant?.label).price)}</Text>
                <Text margin={0} type='secondary' h4>x {data?.amount}</Text>
            </div>

        </div>
    </div>

}

