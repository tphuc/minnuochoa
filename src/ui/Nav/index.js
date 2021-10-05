import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Drawer, Badge, Display, Divider, Description } from '@geist-ui/react';
import { ExternalLink, Navigation, ShoppingBag, X } from '@geist-ui/react-icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../swr/cart';
import useCategories from '../../swr/category';
import CartItem from '../Cart/CartItem';
import React from 'react';
import { formatNumber } from '../../lib';
import StyleLink from '../../components/StyleLink';




export default function Nav() {

    const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useCategories();
    const { palette } = useTheme();
    const [openCart, setOpenCart] = useState(false)
    const isMobile = useMediaQuery('mobile');
    const history = useHistory()

    const { data: cart } = useCart();

    const totalprice = React.useCallback(() => {
        if (!cart) {
            return 0;
        }
        var total = 0;
        cart?.map(item => { total += item?.variantSelected?.price * item.amount })

        return total
    }, [cart])



    return <div>
        <Drawer visible={openCart} onClose={() => setOpenCart(false)} style={{ borderRadius: 0, }} placement="right">

            <div style={{ display: "flex", justifyContent: "start" }}>
                <Button width='100px' onClick={() => setOpenCart(false)} icon={<X size={24} />} type='abort' >Close</Button>
            </div>
            <Drawer.Title>Giỏ hàng của tôi</Drawer.Title>
            <Drawer.Content width='80vw' style={{ maxWidth: "520px", display: "flex", flexDirection: "column" }}>

                {/* <Text h4 >Giỏ hàng của tôi</Text> */}
                {cart?.length == 0 ? <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <ShoppingBag size={52} />
                    <Text type='secondary' p>Giỏ hàng đang trống</Text>
                </div>
                    :
                    <>
                        {cart?.map(item => <CartItem data={item} />)}
                        <Divider />
                        <Description title='Tất cả' content={<Text b>{formatNumber(totalprice())}</Text>} />
                        <Spacer h={1} />
                        <Description title='Phí vận chuyển' content={<Text b>{formatNumber(30000)}</Text>} />
                        <Divider />
                        <Description title={<Text marginBottom={0} type='default' h5 b>Tổng</Text>} content={<Text b>{formatNumber(totalprice() + 30000)}</Text>} />
                        <Spacer h={2} />
                        <Button onClick={() => history.push('/checkout')} type='success-light' width='100%' scale={2} iconRight={<ShoppingBag />}>Thanh toán</Button>
                    </>
                }

            </Drawer.Content>
        </Drawer>

        <Page.Header style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
            <Image disableSkeleton={true} height='60px' width='auto' style={{ cursor: "pointer" }} onClick={() => history.push('/')} src="https://cdn.dribbble.com/users/3812993/screenshots/9843080/media/74c2871ed47c78d31d47b4cc949a8914.png?compress=1&resize=400x300" />
            <Spacer y={0.2} />
            {!isMobile && categories?.map((item, id) => <StyleLink 
            style={{
                marginLeft:10
            }}
            href={{
                pathname:"/search",
                search: '?' + new URLSearchParams({ category: item.label })
            }}  underline={false} key={id}>{item.label}</StyleLink>)}
            <div style={{ flex: 1 }} />
            <Badge.Anchor>
                <Badge scale={0.5} >{cart?.length}</Badge>
                <Button onClick={() => setOpenCart(true)} iconRight={<ShoppingBag />} auto scale={2 / 3} />
            </Badge.Anchor>
            <Spacer y={0.2} />
        </Page.Header>

    </div>
}