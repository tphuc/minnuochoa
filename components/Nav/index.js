import { Button, Input, Text, useTheme, Drawer, Divider, Spacer, Description, Badge, useMediaQuery } from '@geist-ui/react';
import React from 'react';
import Image from 'next/image'
import Logo from '../../assets/logo.jpg'
import Link from 'next/link'
import useCategories from '../../frameworks/supabase/categories';
import { Search, ShoppingBag, X } from '@geist-ui/react-icons';
import CartItem from '../../components/CartItem';
import useCart from '../../frameworks/supabase/cart';
import { formatNumber, parseLabelPrice } from '../../utils';

export default function Nav({ layout = 'fixed', search = false, onSearch = () => { }, logoLeft = false, showCategories = true, ...props }) {
    const { data: categories } = useCategories();
    const theme = useTheme();
    const { data: cart } = useCart();
    const [openCart, setOpenCart] = React.useState(false);
    const isMobile = useMediaQuery('mobile')

    const totalprice = React.useCallback(() => {
        if (!cart) {
            return 0;
        }

        var total = 0;
        cart?.map(item => { total += parseLabelPrice(item?.variant?.label)?.price * item.amount })

        return total
    }, [cart])

    return <div style={{ position: layout == 'fixed' ? "fixed" : 'relative', top: 0, zIndex: 10, background: theme.palette.background }}>
        <style jsx>{`
        a {
            color: ${theme.palette.accents_4};
            margin: 0.5em;
            transition: 0.3s ease;
        };

        a:hover{
            color: ${theme.palette.accents_6};
            
        }


      `}</style>
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
                        {cart?.map((item, id) => <CartItem key={id} data={item} />)}
                        <Divider />
                        <Description title='Tất cả' content={<Text b>{formatNumber(totalprice())}</Text>} />
                        <Spacer h={1} />
                        <Description title='Phí vận chuyển' content={<Text b>{formatNumber(30000)}</Text>} />
                        <Divider />
                        <Description title={<Text marginBottom={0} type='default' h5 b>Tổng</Text>} content={<Text b>{formatNumber(totalprice() + 30000)}</Text>} />
                        <Spacer h={2} />
                        <Link href={'/checkout'} passHref>
                        <Button  type='success-light' width='100%' scale={2} iconRight={<ShoppingBag />}>Thanh toán</Button>
                        </Link>
                    </>
                }

            </Drawer.Content>
        </Drawer>
        <div style={{ position: "relative", display: "flex", flexDirection: "row", boxSizing:'border-box', justifyContent: "center", alignItems: "center", height: 80, width: '100vw', paddingLeft: isMobile ?10 : 50, paddingRight: isMobile ? 10 : 50 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                {logoLeft && <Link passHref href={'/'}><Image alt='=' layout='intrinsic' height={80} width={100} objectFit='contain' src={Logo} /></Link>}
            </div>
            {!logoLeft && <Link passHref href={'/'}><Image alt='=' layout='intrinsic' height={80} width={100} objectFit='contain' src={Logo} /></Link>}
            {search && !isMobile && <Input
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        onSearch(e.target.value)
                    }
                }} iconRight={<Search />} onBlur={(e) => onSearch(e.target?.value)} iconClickable placeholder='tìm kiếm sản phẩm' width='240px' />}
            <div style={{ flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end",  }}>

                <Badge.Anchor >
                <Button onClick={() => setOpenCart(true)} auto scale={2/3} iconRight={<ShoppingBag />}></Button>
                    <Badge scale={0.5} >{cart?.length}</Badge>
                   
                </Badge.Anchor>
               

            </div>
        </div>
        {showCategories && !isMobile && <div style={{ height: 46, position: "relative", width: "100vw", display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
            {
                categories?.map((item, id) => <Link key={id} passHref href={`/search?category=${item.id}`}>
                    <a style={{ cursor: 'pointer' }} >{item.label}</a>
                </Link>)
            }
        </div>}
        {search && isMobile && <Input
            padding={'20px'}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                        onSearch(e.target.value)
                    }
                }} iconRight={<Search />} onBlur={(e) => onSearch(e.target?.value)} iconClickable placeholder='tìm kiếm sản phẩm' width='100%'  />}
    </div>
}