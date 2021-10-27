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
import { ProductsCRUD } from '../../frameworks/supabase/products';



export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await ProductsCRUD.getAll()
    const posts = res

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((product) => ({
        params: { postId: product.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export async function getStaticProps(context) {
    const { postId } = context.params
    const res = await ProductsCRUD.getOne(postId)
    const data = res[0]

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data }, // will be passed to the page component as props
    }
  }


// export async function getServerSideProps(context) {
//     const { postId } = context.params
//     console.log('context', context)
//     const res = await ProductsCRUD.getOne(postId)
//     const data = res[0]

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             data
//         }, // will be passed to the page component as props
//     }
// }


export default function Product({
    data
}) {

    return <Page render='effect' width='100vw' >
        {/* <NextSeo
            title={data?.label}
            openGraph={{
                images: [
                    {
                        url: data?.images[0]?.url,
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                ],
                site_name: 'Min Perfume',
            }}
        /> */}
        <Head>
            <title>{data?.label}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:image" content={data?.images[0]?.url}></meta>
        </Head>
        <Nav layout='relative' showCategories={false} />
        <Page.Content>
            <Link passHref href={'/search'}><Button auto type='abort' icon={<ChevronLeft />}>Tất cả sản phẩm</Button></Link>
            {/* <Button scale={1.5} onClick={() => history.push('/search')}  type='abort' icon={<ChevronLeft/>}>Tất cả sản phẩm</Button> */}
            <Grid.Container gap={2} >
                <Grid xs={24} direction='column' md={14} >
                    <ProductSlider images={data?.images || []} />
                </Grid>
                <Grid xs={24} md={10}>
                    <ProductSidebar data={data} />
                </Grid>

            </Grid.Container>
        </Page.Content>
        <Footer />

    </Page>
}

