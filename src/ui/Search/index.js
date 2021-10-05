import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import ProductCard from '../Product/ProductCard';

import useBrands from '../../swr/brand';

import useCategories from '../../swr/category';
import useProducts from '../../swr/products';
import useSorts from '../../swr/sort';
import { findIdByLabel, getSlug, useQuery } from '../../lib';
import { filterQuery, useSearchMeta, getBrandPath } from '../../lib/use-search-meta';
import Footer from '../Footer';
import { useGlobalState } from '../../swr';
import StyleLink from '../../components/StyleLink';







export default function Search(props) {
    const { palette } = useTheme()
    const sort = useQuery().get('sort')
    const category = useQuery().get('category')
    const brand = useQuery().get('brand')
    const history = useHistory();
    const location = useLocation();
    const { data: categories, isLoading: isCategoriesLoading } = useCategories();
    const { data: brands, isLoading: isBrandsLoading } = useBrands();
    const { data: products, fetchFilter, mutate: mutateProducts } = useProducts([categories, brands]);
    // const { categories, brands } = useGlobalState()



    const { data: sorts } = useSorts();
    const isMobile = useMediaQuery('mobile');


    const isMatchCategorySlug = React.useCallback((str) => {
        return location.pathname.includes(str)
    }, [location.pathname])



    React.useEffect(() => {

        fetchFilter({
            categories: category ? [`categories.${findIdByLabel(categories || [], category)}.label`, '==', category] : null,
            brands: brand ? [`brands.${findIdByLabel(brands || [], brand)}.label`, '==', brand] : null,
            sort: sort && [ sort === 'timestamp' ? 'timestamp' : 'price' , sort === 'timestamp' ? 'desc' : sort]

        }).then(res => {
            console.log(res)
            mutateProducts(res, false)
        })




    }, [brand, category, sort])



    return <Page render='effect' width='100%' >
        <Nav />
        <Page.Content style={{ minHeight: "80vh" }}>
            {isMobile && <>
                <Text b h4>Tìm nước hoa bạn muốn</Text>
                <Select width='100%' placeholder="Danh mục" onChange={(val) => {
                    history.push({
                        pathname: "/search",
                        search: '?' + new URLSearchParams({ category: val, brand, sort })
                    })
                }} >
                    {categories?.map((item, id) => <Select.Option value={item.label} key={id}>{item.label}</Select.Option>)}
                </Select>
                <Spacer h={0.2} />
                <Select width='100%' placeholder="Hãng" onChange={(val) => {
                    history.push({
                        pathname: "/search",
                        search: '?' + new URLSearchParams({ category, brand: val, sort })
                    })
                }} >
                    {brands?.map((item, id) => <Select.Option value={item.label} key={id}>{item.label}</Select.Option>)}
                </Select>
                <Spacer h={0.2} />
                <Select width='100%' placeholder="Sắp xếp" onChange={(val) => {
                    history.push({
                        pathname: "/search",
                        search: '?' + new URLSearchParams({ category, brand, sort: val })
                    })
                }} >
                    {sorts?.map((item, id) => <Select.Option value={item.value} key={id}>{item.label}</Select.Option>)}
                </Select>
                <Spacer h={2} />
            </>}

            <Grid.Container gap={2} justify="center">
                <Grid xs={0} md={4} pl='2%' direction='column'>
                    <Text h3>Danh mục</Text>
                    <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category: '', brand, sort })
                        }}
                    >
                        Tất cả
                    </StyleLink>
                    {categories?.map((item, id) => <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category: item.label, brand, sort })
                        }}
                        isActive={category == item.label}
                        key={id}>{item.label}</StyleLink>)}

                    <Spacer h={3} />
                    <Text h3>Hãng</Text>
                    <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category, brand:'', sort })
                        }}
                    >
                        Tất cả
                    </StyleLink>
                  
                    {brands?.map((item, id) => <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category, brand: item.label, sort })
                        }}
                        isActive={brand == item.label} key={id}>{item.label}</StyleLink>)}
                </Grid>
                <Grid xs={24} md={16}>

                    <Grid.Container gap={2} >
                        {
                            products?.map((item, id) => <Grid xs={24} sm={12} md={5} ><ProductCard data={item} /></Grid>)
                        }
                    </Grid.Container>

                </Grid>
                <Grid xs={0} md={4} direction='column'>
                    <Text h3>Sắp xếp</Text>
                    {sorts?.map((item, id) => <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category, brand, sort: item.value })
                        }}
                        color underline key={id}>{item.label}</StyleLink>)}
                </Grid>

            </Grid.Container>
        </Page.Content>

        <Footer />

    </Page>
}

