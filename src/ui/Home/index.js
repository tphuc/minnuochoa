import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Image, useTheme, Divider } from '@geist-ui/react';
import { Award, ChevronRight, Gift, Navigation, Package, ShoppingBag, ShoppingCart, ArrowRightCircle } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav';
import Marquee from "react-fast-marquee";
import useHightlightProducts from '../../framework/supabase/hightlight-products'

import './index.css'

import ProductCard from '../Product/ProductCard';
import useCategories from '../../framework/supabase/categories';


const HeroCard = ({ data = { label: "ABC", images: [{ name: "" }] } }) => {
    const history = useHistory()
    return <div className='hero-card'
        onClick={() => history.push('/search')}
        style={{
            cursor: "pointer",
            width: "100%", height: "100%",
            display: "flex", justifyContent: "center", alignItems: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${data?.images[0]?.url})`
        }}
    >
        <div className='hero-card-overlay'></div>
        <Text className='hero-card-text' style={{ color: "#fff", zIndex: 1 }} h5>{data.label}</Text>
    </div>
}


export default function Home(props) {

    const history = useHistory();
    const location = useLocation();
    const { palette } = useTheme()

    const { data: categories, isError, isLoading } = useCategories()
    const { data: products } = useHightlightProducts()
    const isMobile = useMediaQuery('mobile')

    return <div>
        <div>
            <Grid.Container style={{ minHeight: '100vh' }} direction='row' margin={0} gap={0}   >
                <Grid xs={24} sm={24} md={24}
                    direction='column'
                    style={{ backgroundRepeat: 'no-repeat', width: "100vw", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `linear-gradient(rgba(20,23,27,0.82) 40vh, rgba(21, 25, 31, 0.2), rgba(21, 25, 31, 0)), url(https://res.cloudinary.com/minnuochoa-com/image/upload/v1633691914/244973743_2349931545143229_7997632194508024423_n_dmff7e.jpg)` }}
                >
                    <Nav logo={false} />
                    {/* <Image width='100%' height='100vh' style={{objectFit:"cover"}}  src='https://res.cloudinary.com/minnuochoa-com/image/upload/v1633691914/244973743_2349931545143229_7997632194508024423_n_dmff7e.jpg' /> */}
                    {/* <Spacer h={2}/> */}
                    <div style={{ padding: "5%", paddingTop: "12%" }}>
                        <Text style={{ color: "#ffffff" }} h2> Min Perfume </Text>
                        <Text style={{ color: "#ffffff" }} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
                        <Button onClick={() => history.push('/search')} width={100} auto scale={1.5} type='primary-light' iconRight={<ChevronRight />}> Xem các sản phẩm </Button>
                    </div>

                </Grid>
                {/* <Grid xs={0} sm={24} md={9} >
                    <Grid.Container width='100%' wrap='wrap'>
                        {
                            categories?.slice(0, 5)?.map((item, id) => <Grid key={id} xs={0} md={12} style={{ position: "relative", background: '#111' }}>

                                <HeroCard data={item} />

                            </Grid>)
                        }
                        <Grid xs={0} md={12} style={{ position: "relative", background: palette.accents_7 }}>
                            <div className='hero-card'
                                onClick={() => history.push('/search')}
                                style={{

                                    cursor: "pointer",
                                    width: "100%", height: "100%",
                                    flexDirection: "column",
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className='hero-card-overlay'></div>
                                <Text style={{ color: "#fff", zIndex: 1 }} h5>Xem bộ sưu tập</Text>
                                <ArrowRightCircle color='#fff' />

                            </div>
                        </Grid>

                    </Grid.Container>
                </Grid> */}

            </Grid.Container>
            <Spacer h={2} />
            {/* <Text my={1} style={{ textAlign: "center" }} b h3>Ở ĐÂY MIN CÓ BÁN</Text>
            <Marquee speed={80} style={{ width: "100vw" }} gradient={false}>
                {categories?.map((item, id) => <div key={id} style={{ display: "flex", flexDirection: "column", padding: 10, backgroundColor: palette.background }}>
                    <Image onClick={() => history.push('/search')} style={{ cursor: "pointer", objectFit: "cover" }} width={'350px'} height={'340px'} src={item?.images[0]?.name} />
                    <Button scale={1.5} onClick={() => history.push('/search')} type='secondary-light'>{item.label}</Button>
                </div>)}
            </Marquee> */}
        <Text my={1} style={{ textAlign: "center" }} b h3>Ở ĐÂY MIN CÓ BÁN</Text>

            <div style={{ overflowY: "scroll", cursor:"pointer", display: "flex", flexDirection: "row", justifyContent: isMobile?  'flex-start': "center" }}>

                    {
                        categories?.map((item, id) => <div 
                            onClick={() => history.push({
                                pathname:"/search",
                                search: '?' + new URLSearchParams({ category: item.label })
                            })}
                            key={id}
                            style={{
                                display:"flex",
                                flexDirection:"column",
                                textAlign:"center",
                                padding:10
                            }}
                            >
                                <Image  width={isMobile ?  '100px' : '160px'} height={isMobile ?  '100px' : '160px'} style={{ borderRadius:"50%"}} src={item.images[0].url} alt=''/>
                                <Text  style={{  zIndex: 1 }} h5>{item.label}</Text>
                            </div>)
                    }
                    

                </div>
            
            <Spacer h={2} />
            <Text my={1} style={{ textAlign: "center" }} b h3>SẢN PHẨM NỔI BẬT</Text>
            {/* <Grid.Container wrap='wrap' direction='row' justify='flex-start' gap={0} margin={0} style={{maxWidth:"100vw"}}  >
                {
                    products?.map((item, id) => <Grid xs={12} sm={12} md={3} ><ProductCard data={item} /></Grid>)
                }
            </Grid.Container> */}
            <Marquee speed={60} style={{ width: "100%" }} gradient={false}>
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

