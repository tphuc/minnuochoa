import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Image, useTheme, Divider } from '@geist-ui/react';
import { Award, ChevronRight, Gift, Navigation, Package, ShoppingBag, ShoppingCart } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useCategories from '../../swr/category';
import Footer from '../Footer';
import Nav from '../Nav';
import Marquee from "react-fast-marquee";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import css from './index.css'
import useHightlightProducts from '../../swr/hightlight-products';
import ProductCard from '../Product/ProductCard';


export default function Home(props) {

    const history = useHistory();
    const location = useLocation();
    const { palette } = useTheme()

    const { data: categories, isError, isLoading } = useCategories();
    const { data: products } = useHightlightProducts()
    console.log(products)
    const isMobile = useMediaQuery('mobile')

    return <div  >
        <Nav logo={false} />
        <div>
            <Grid.Container height='800px' wrap='wrap' direction='row' margin={0} gap={0}   >
                <Grid xs={24} sm={24} md={24} style={{ backgroundRepeat: 'no-repeat', width: "100vw", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `linear-gradient( rgba(0,0,0,0.8) 40vh, rgba(21, 25, 31, 0)), url(https://www.chanel.com/us/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_jpg/w_960/prd-emea/sys-master/content/h92/hf9/9275779514398-BLEU_PLP-PDP_ONE_VERTICAL-PUSH_1080x1150_GROOMING-2.jpg` }} >
                    {/* <Image width='100vw' src='https://product.hstatic.net/1000340570/product/chanel-bleu-de-chanel-parfum-1_f790d6ad778944c4a4cbeaaf3cd4b561.jpg' /> */}
                    {/* <Spacer h={2}/> */}
                    <div style={{ padding: "5%", paddingTop: "10%" }}>
                        <Text style={{ color: "#ffffff" }} h1> Minnuochoa </Text>
                        <Text style={{ color: "#ffffff" }} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
                        <Button onClick={() => history.push('/search')} width={100} auto scale={1.5} type='primary-light' iconRight={<ChevronRight />}> Xem các sản phẩm </Button>
                    </div>

                </Grid>
                {/* <Grid xs={24} sm={24} md={9} direction='column' justify='center' style={{paddingTop:"60px", minHeight:800, backgroundColor: '#111'}} >
                    <div style={{ width: "100%", position: "relative", height: "100%",}}>
                        <AwesomeSlider bullets={false} organicArrows cssModule={css} fillParent style={{ backgroundColor: "#aaa" }}>
                            {categories?.map((item, id) => <div key={id} style={{ display: "flex", flexDirection: "column", width: '100%', height:'100%', backgroundColor: palette.background }}>
                                <Image onClick={() => history.push('/search')} style={{cursor:"pointer", objectFit:"cover"}} width={'100%'} height='100%'  src={item.images[0].name} />
                                <Button  scale={1.5} onClick={() => history.push('/search')} type='secondary-light'>{item.label}</Button>
                            </div>)}
                        </AwesomeSlider>
                    </div>
                </Grid> */}
            </Grid.Container>
            <Spacer h={2}/>
            <Text my={1} style={{ textAlign: "center" }} b h3>Ở ĐÂY MIN CÓ BÁN</Text>
            <Marquee style={{width:"100vw"}} gradient={false}>
            {categories?.map((item, id) => <div key={id} style={{ display: "flex", flexDirection: "column", padding:15, backgroundColor: palette.background }}>
                        <Image onClick={() => history.push('/search')} style={{cursor:"pointer", objectFit:"cover"}} width={'350px'} height={'340px'}  src={item.images[0].name} />
                        <Button  scale={1.5} onClick={() => history.push('/search')} type='secondary-light'>{item.label}</Button>
                    </div>)}
            </Marquee>
            <Spacer h={2} />
            <Text my={1} style={{ textAlign: "center" }} b h3>SẢN PHẨM NỔI BẬT</Text>
            {/* <Grid.Container wrap='wrap' direction='row' justify='flex-start' gap={0} margin={0} style={{maxWidth:"100vw"}}  >
                {
                    products?.map((item, id) => <Grid xs={12} sm={12} md={3} ><ProductCard data={item} /></Grid>)
                }
            </Grid.Container> */}
            <Marquee speed={60} style={{width:"100%"}} gradient={false}>
            {
                    products?.map((item, id) => <ProductCard width={'160px'} data={item} />)
                }
            </Marquee>
           
            <div style={{ backgroundColor: palette.accents_1 }}>
                <Spacer h={5} />
                <Text my={1} style={{ textAlign: "center" }} b h3>ĐA DẠNG SẢN PHẨM, CẬP NHẬT LIÊN TỤC</Text>
                <Spacer h={1} />
                
                <Spacer h={2} />
                <Grid.Container gap={0} >
                    <Grid xs={24} md={8} direction='column' >

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                            <Award size={72} />

                            <Text font={1.5} my={1} style={{ textAlign: "center" }}>SẢN PHẨM CHÍNH HÃNG</Text>
                        </div>



                    </Grid>
                    <Grid xs={24} md={8} direction='column' >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Package size={72} />
                            <Text font={1.5} my={1} >BẢO HÀNH TRỌN ĐỜI</Text>
                        </div>
                    </Grid>
                    <Grid xs={24} md={8} direction='column' >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                            <ShoppingCart size={72} />
                            <Text font={1.5} my={1} >GIAO HÀNG TOÀN QUỐC</Text>
                        </div>
                    </Grid>


                </Grid.Container>
            </div>
            
        </div>

        <Footer />


    </div>
}

