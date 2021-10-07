import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import ProductCard from './ProductCard';

import useBrands from '../../swr/brand';

import useCategories from '../../swr/category';
import useProductItemDetail from '../../swr/product-item';
import useSorts from '../../swr/sort';
import { getSlug, useQuery } from '../../lib';
import { filterQuery, useSearchMeta, getBrandPath } from '../../lib/use-search-meta';
import ProductSidebar from './ProductSidebar';
import ProductSlider from './ProductSlider';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';




export default function Product({

}) {
    const { palette } = useTheme()
    const query = useQuery()

    const history = useHistory();
    let {id} = useParams()
    console.log(id)

    const { data: product } = useProductItemDetail(id);

    const isMobile = useMediaQuery('mobile');


    return <Page render='effect' width='100vw' >
        <Nav />
        <Page.Content>
            <Grid.Container gap={2} >
                <Grid xs={24}  md={14} >
                    <ProductSlider images={product?.images || []} />
                </Grid>
                <Grid xs={24}  md={8}>
                    <ProductSidebar data={product}/>
                </Grid>

            </Grid.Container>
        </Page.Content>
        <Footer/>

    </Page>
}

