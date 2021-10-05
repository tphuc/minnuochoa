import { Page, Spinner, Tabs, Grid, Card, Text, Button, Input, Image, useTheme, Spacer } from '@geist-ui/react';
import { Minus, Navigation, Plus, ShoppingBag, X } from '@geist-ui/react-icons';
import Cookies from 'js-cookie';

import React from 'react';
import useCart from '../../../swr/cart';
import { formatNumber } from '../../../lib';





export default function CartItem({
    data,
    ...props
}) {

    const { data: cart, mutate: cartMutate } = useCart()
    const [value, setValue] = React.useState(data.amount);


    const onChange = () => {
        let index = cart?.findIndex(item => item.id == data?.id);
        if (index > -1) {
            let _cart = JSON.parse(Cookies.get('cart') || '[]');;
            _cart[index].amount = parseInt(value);

            Cookies.set('cart', JSON.stringify([..._cart]))
            cartMutate([..._cart])

        }

    }


    const deleteItem = () => {
        let index = cart?.findIndex(item => item.id == data?.id);
        if (index > -1) {
            let _cart = JSON.parse(Cookies.get('cart') || '[]');;
            _cart.splice(index, 1)
            Cookies.set('cart', JSON.stringify([..._cart]))
            cartMutate([..._cart])
        }
    }


    React.useEffect(() => {
        if (value) {
            onChange()
        }
    }, [value])

    return <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "left" }}>
            <Image margin={0} width={'100px'} height={'100px'} src={data.images[0].url} />
            <div>
                <Text margin={0} h4 >{data.name}</Text>
                <Text margin={0} type='secondary' p>{formatNumber(data.variantSelected.price)}</Text>

            </div>

        </div>
        <Spacer h={1} />
        <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Button onClick={deleteItem} type='secondary-light' ghost style={{ borderRadius: 0 }} height='40px' auto icon={<X />}></Button>
            <Spacer w={0.5} />
            <div style={{ flex: 1, justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                <Input value={value} style={{ borderRadius: 0, flex: 1 }} height='40px' margin={0} padding={0} scale={3 / 2} htmlType='number' />

                <div style={{ flex: 1 }}></div>
                <Button type='secondary-light' onClick={() => setValue(Math.max(1, value + 1))} ghost style={{ borderRadius: 0 }} height='40px' auto icon={<Plus />}></Button>
                <Spacer w={0.5} />
                <Button type='secondary-light' onClick={() => setValue(Math.max(1, value - 1))} ghost style={{ borderRadius: 0 }} height='40px' auto icon={<Minus />}></Button>
            </div>
        </div>
    </div>

}

