import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Drawer, Badge, Display, Divider, Description } from '@geist-ui/react';
import { ExternalLink, Facebook, Instagram, MapPin, Navigation, Phone, ShoppingBag, X } from '@geist-ui/react-icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../swr/cart';
import useCategories from '../../swr/category';
import CartItem from '../Cart/CartItem';
import React from 'react';
import { formatNumber } from '../../lib';
import LogoImg from '../../logo.png'



export default function Footer() {

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
        <Divider />
        <Grid.Container gap={2} mb={2} >
            <Grid xs={24} md={2}  >
                <div>
                    <Image disableSkeleton={true} height='60px' width='auto' src={LogoImg}></Image>
                </div>
            </Grid>
            <Grid xs={24} ml={1} md={8} direction='column' >
                <Link><Text my={0}> Điều khoản sử dụng</Text></Link>
                <Link><Text my={0}> Điều khoản mua & trả hàng </Text></Link>
            </Grid>
            <Grid xs={24} ml={1} md={8} direction='column'>
                <Text my={0}>Hotline: 0777.039.286 </Text>
                <Text my={0}>CN1: 84 Trần Kế Xương, P.7, Q.Phú Nhuận, TP.HCM </Text>
                <Text my={0}>CN2: 256 Ngô Quyền, P.Tân An, TX.Lagi, Bình Thuận </Text>
                <Text my={0}>CN3: 98 Thái Hà, Đống Đa, Hà Nội </Text>
            </Grid>
            <Grid ml={1} xs={24} md={3}  >
                <div>
                <Text  style={{whiteSpace:'nowrap'}}  my={0}>© 2020 Minnuochoa</Text>
        
                <Text my={0.5}>THEO DÕI CHÚNG TÔI</Text>
                <a  href='https://instagram.com/minnuochoa'>
                    <Instagram size={36}/>
                </a>
                <a  href='https://facebook.com/minnuochoaa'>
                    <Facebook size={36}/>
                </a>
                </div>
            </Grid>

        </Grid.Container>
    </div>
}