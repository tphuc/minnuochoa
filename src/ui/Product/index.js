import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import ProductCard from './ProductCard';

import useBrands from '../../dynamic/brand';

import useCategories from '../../dynamic/category';
import useProductItemDetail from '../../dynamic/product-item';
import useSorts from '../../dynamic/sort';
import { getSlug, useQuery } from '../../lib';
import { filterQuery, useSearchMeta, getBrandPath } from '../../lib/use-search-meta';
import ProductSidebar from './ProductSidebar';
import ProductSlider from './ProductSlider';







export default function Product(props) {
    const { palette } = useTheme()

    const history = useHistory();

    const { data: data } = useProductItemDetail();
    const isMobile = useMediaQuery('mobile');



    const isMatchCategorySlug = React.useCallback((str) => {
        return location.pathname.includes(str)
    }, [location.pathname])




    const sort = useQuery().get('sort')
    const category = useQuery().get('category')
    const brand = useQuery().get('brand')



    return <Page render='effect' width='100%' >
        <Nav />
        <Page.Content>
            <Grid.Container gap={2} >
                <Grid xs={24}  md={14} >
                    <ProductSlider images={data?.images} />
                </Grid>
                <Grid xs={24}  md={8}>
                    <ProductSidebar data={data}/>
                </Grid>

            </Grid.Container>
        </Page.Content>


    </Page>
}

