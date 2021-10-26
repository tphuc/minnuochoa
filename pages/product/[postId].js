import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Select, useTheme, Breadcrumbs } from '@geist-ui/react';
import { ChevronLeft, Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'

import Link from 'next/link';
import ProductSlider from '../../components/ProductSlider'
import ProductSidebar from '../../components/ProductSidebar'
import useProductItem from '../../frameworks/supabase/product-item';
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Product({

}) {
    const { postId } = useRouter().query
    // const { palette } = useTheme()
    // const query = useQuery()

    // const history = useHistory();
    // let {id} = useParams()



    const { data: product } = useProductItem(postId);


    // const isMobile = useMediaQuery('mobile');


    return <Page render='effect' width='100vw' >
        <NextSeo
            title={product?.label}
            openGraph={{
                images: [
                    {
                        url: product?.images[0]?.url,
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                ],
                site_name: 'Min Perfume',
            }}
        />
        {/* <Head>
            <title>{product?.label}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:image" content={product?.images[0]?.url}></meta>
        </Head> */}
        <Nav layout='relative' showCategories={false} />
        <Page.Content>
            <Link href={'/search'}><Button auto type='abort' icon={<ChevronLeft />}>Tất cả sản phẩm</Button></Link>
            {/* <Button scale={1.5} onClick={() => history.push('/search')}  type='abort' icon={<ChevronLeft/>}>Tất cả sản phẩm</Button> */}
            <Grid.Container gap={2} >
                <Grid xs={24} direction='column' md={14} >
                    <ProductSlider images={product?.images || []} />
                </Grid>
                <Grid xs={24} md={10}>
                    <ProductSidebar data={product} />
                </Grid>

            </Grid.Container>
        </Page.Content>
        <Footer />

    </Page>
}

