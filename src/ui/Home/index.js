import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Image, useTheme, Slider, Divider } from '@geist-ui/react';
import { Award, ChevronRight, Gift, Navigation, Package, ShoppingBag, ShoppingCart } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useCategories from '../../dynamic/category';
import Footer from '../Footer';
import Nav from '../Nav';
import Marquee from "react-fast-marquee";





export default function Home(props) {

    const history = useHistory();
    const location = useLocation();
    const { palette } = useTheme()

    const { data: categories, isError, isLoading } = useCategories();
    const isMobile = useMediaQuery('mobile')

    return <Page render='effect' width='100%' >
        <Nav />
        <Page.Content>
            <Grid.Container gap={0} >
                <Grid xs={24} md={14}  >
                    <Image width='500px' src='https://m.media-amazon.com/images/I/71N+33GFefL._SL1500_.jpg' />



                </Grid>
                <Grid xs={24} md={10} direction='column' style={{ backgroundColor: palette.accents_1 }} padding={2}>
                    <div >
                        <Text h3> Minnuochoa </Text>
                        <Text > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
                        <Button onClick={() => history.push('/search')} width={100} auto scale={1.5} type='secondary-light' iconRight={<ChevronRight />}> Xem các sản phẩm </Button>
                    </div>
                </Grid>


            </Grid.Container>
            <Spacer h={5} />
            <Divider type='dark' />
            <Text my={1} style={{ textAlign: "center" }} b h3>ĐA DẠNG SẢN PHẨM, CẬP NHẬT LIÊN TỤC</Text>
            <Spacer h={1} />
            {/* <Spacer h={2}></Spacer>
                <Divider/>
                <Spacer h={2} />
                <Text style={{textAlign:"center"}} h3>Các loại sản phẩm</Text>
                <Grid.Container gap={2} >
                <Grid xs={24} md={8} direction='column' justify='center' >
        
                    <Image width='340px'  src='https://m.media-amazon.com/images/I/71N+33GFefL._SL1500_.jpg' />
                   

                </Grid>

                <Grid xs={24} md={8} >
        
                    <Image width='340px'  src='https://m.media-amazon.com/images/I/71N+33GFefL._SL1500_.jpg' />
  

                </Grid>
                <Grid xs={24} md={8} direction='column'>
                <Image width='340px'  src='https://m.media-amazon.com/images/I/71N+33GFefL._SL1500_.jpg' />

                </Grid>

              
            </Grid.Container>
            <Spacer h={1}/>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Button style={{ borderColor:palette.accents_8 }}>Xem tất cả</Button>
            </div>
            <Divider/> */}
            <Marquee speed={80} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image height='320px' src='https://www.sephora.com/productimages/sku/s909093-main-zoom.jpg' />
                    <Button style={{ position: "absolute", bottom: 10, }} >NƯỚC HOA CHIẾT NAM</Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image height='320px' src='https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_2.jpg' />
                    <Button style={{ position: "absolute", bottom: 10 }} >NƯỚC HOA CHIẾT NỮ</Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image height='320px' src='https://i1.perfumesclub.com/grande/123206.jpg' />
                    <Button style={{ position: "absolute", bottom: 10 }}>LĂN KHỬ MÙI</Button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image height='320px' src='https://m.media-amazon.com/images/I/71N+33GFefL._SL1500_.jpg' />
                    <Button style={{ position: "absolute", bottom: 10 }}>SON MÔI</Button>
                </div>


            </Marquee>
            <Divider type='dark'/>
            <Spacer h={2} />
            <Grid.Container gap={0} >
                <Grid xs={24} md={8} direction='column' >

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
                    
                        <Award  size={72}  />

                        <Text font={1.5} my={1} style={{ textAlign: "center" }}>SẢN PHẨM CHÍNH HÃNG</Text>
                    </div>



                </Grid>
                <Grid xs={24} md={8} direction='column' >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }}>
                        <Package size={72} />
                        <Text  font={1.5} my={1} >BẢO HÀNH TRỌN ĐỜI</Text>
                    </div>
                </Grid>
                <Grid xs={24} md={8} direction='column' >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }} >
                        <ShoppingCart size={72} />
                        <Text  font={1.5} my={1} >GIAO HÀNG TOÀN QUỐC</Text>
                    </div>
                </Grid>


            </Grid.Container>

        </Page.Content>

        <Footer />

    </Page>
}

