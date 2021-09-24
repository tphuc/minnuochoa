import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Drawer, Badge, Display, Divider, Description } from '@geist-ui/react';
import { ExternalLink, MapPin, Navigation, Phone, ShoppingBag, X } from '@geist-ui/react-icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../dynamic/cart';
import useCategories from '../../dynamic/category';
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



    return <Page.Footer>
        <Divider />
        <Grid.Container gap={2} mb={2} >
            <Grid xs={24}  md={2}  >
                <div>
                    <Image disableSkeleton={true} height='60px' width='auto'   src={LogoImg}></Image>
                </div>
            </Grid>
            <Grid xs={24} ml={1} md={8} direction='column' >
                <Link><Text my={0}> Điều khoản sử dụng</Text></Link>
                <Link><Text my={0}> Điều khoản mua & trả hàng </Text></Link>
            </Grid>
            <Grid  xs={24} ml={1} md={8} direction='column'>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <Phone/> <Text ml={2} span>088.8880.777 </Text>
                </div>
                <Spacer y={0.1}/>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <MapPin/> <Text ml={2} span>Thong Nhat, Ngo Quyen, Binh Thuan </Text>
                </div>
            </Grid>
            <Grid ml={1} xs={24}  md={2}  >
                <Text>© 2020-2022 Minnuochoa</Text>
            </Grid>

        </Grid.Container>
    </Page.Footer>
}