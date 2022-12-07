import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Select, useTheme, Drawer, Badge, Display, Divider, Description } from '@geist-ui/react';
import Image from 'next/image'
import React from 'react';
import LogoImg from '../../assets/logo.jpg'
import { ExternalLink, Facebook, Instagram, MapPin, Navigation, Phone, ShoppingBag, X } from '@geist-ui/react-icons';


export default function Footer() {


    const theme = useTheme()


    return <div>
        {/* <Divider/> */}
        <Grid.Container   >
            <Grid xs={24} md={2}  >
                <div>
                    <Image alt=''  height={50} width={100} objectFit='contain'  src={LogoImg}></Image>
                </div>
            </Grid>
            <Grid xs={24} ml={1} md={8} direction='column' >
                <Link><Text my={0} p> Điều khoản sử dụng</Text></Link>
                <Link><Text my={0} p> Điều khoản mua & trả hàng </Text></Link>
            </Grid>
            <Grid xs={24} ml={1} md={8} direction='column'>
                <Text my={0}>Hotline: 0777.039.286 </Text>
                <Text my={0}>CN1: 23 Nơ Trang Long, P.7, Bình Thạnh, TP.HCM </Text>
                <Text my={0}>CN2: 256 Ngô Quyền, P.Tân An, TX.Lagi, Bình Thuận </Text>
                <Text my={0}>CN3: 98 Thái Hà, Đống Đa, Hà Nội </Text>
            </Grid>
            <Grid ml={1} xs={24} md={3}  >
                <div>
                <Text  style={{whiteSpace:'nowrap'}}  my={0}>© 2020 MinPerfume</Text>
        
                <Text my={0.5}>THEO DÕI CHÚNG TÔI</Text>
                <a  href='https://instagram.com/minnuochoa'>
                    <Instagram color={theme.palette.accents_6} size={24}/>
                </a>
                <a  href='https://facebook.com/minnuochoaa'>
                    <Facebook color={theme.palette.accents_6} size={24}/>
                </a>
                <a  href='https://tiktok.com/@minnuochoa'>
                    <IconBrandTiktok size={24} color={theme.palette.accents_6}/>
                </a>
                </div>
            </Grid>

        </Grid.Container>
        <Spacer h={4}/>
    </div>
}