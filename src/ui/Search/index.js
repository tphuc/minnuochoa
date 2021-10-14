import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Breadcrumbs } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../Nav';
import ProductCard from '../Product/ProductCard';


import useSorts from '../../swr/sort';
import { findIdByLabel, getSlug, useQuery } from '../../lib';
import Footer from '../Footer';
import StyleLink from '../../components/StyleLink';
import useProducts from '../../framework/supabase/products';
import useCategories from '../../framework/supabase/categories';
import useBrands from '../../framework/supabase/brands';



const getSortFunc = (a, b, sort) => {
    if (sort == 'asc') {
        return a.price > b.price
    }
    if (sort == 'desc') {
        return a.price < b.price
    }
    else {
        return new Date(a.timestamp).getTime() < new Date(b.timestamp).getTime()
    }
}




export default function Search(props) {
    const { palette } = useTheme()
    const _sort = useQuery().get('sort')
    const sort = _sort === 'null' ? null : _sort
    const _category = useQuery().get('category')
    const category = _category === 'null' ? null : _category
    const _brand = useQuery().get('brand')
    const brand = _brand === 'null' ? null : _brand
    const [filter, setFilter] = React.useState({});
    const history = useHistory();
    const location = useLocation();
    const { data: categories, isLoading: isCategoriesLoading } = useCategories();

    
    const { data: brands, isLoading: isBrandsLoading } = useBrands();
    
    const { data: products, isLoading: isProductsLoading, isError, fetchFilter, mutate: mutateProducts } = useProducts(filter);

    const { data: sorts } = useSorts();
    const isMobile = useMediaQuery('mobile');

    


    React.useEffect(() => {

        setFilter({ brand, category, sort})
    }, [sort, brand, category])


    const isMatchCategorySlug = React.useCallback((str) => {
        return location.pathname.includes(str)
    }, [location.pathname])



    return <Page padding={0} render='effect-seo' width='100%' >
        <Nav />
        <Spacer h={2} />
        <Page.Content margin={0} style={{ minHeight: "80vh" }}>
            {isMobile && <div style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
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
            </div>}

            <Grid.Container width='100vw'  >
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
                            search: '?' + new URLSearchParams({ category: item.id, brand, sort })
                        }}
                        isActive={category == item.id}
                        key={id}>{item.label}</StyleLink>)}

                    <Spacer h={3} />
                    <Text h3>Hãng</Text>
                    <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category, brand: '', sort })
                        }}
                    >
                        Tất cả
                    </StyleLink>

                    {brands?.map((item, id) => <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category, brand: item.id, sort })
                        }}
                        isActive={brand == item.id} key={id}>{item.label}</StyleLink>)}
                </Grid>
                <Grid xs={24} md={16} width='100%' height={'auto'}  >
               
                    <div style={{ width: "100%", display:"flex", flexDirection:"column"}}>
                        {products?.length == 0 && <Text>Không tìm thấy nước hoa phù hợp</Text>}
                        {isProductsLoading && <Spinner/>}

                    
                        <Grid.Container direction='row' justify='flex-start' gap={isMobile ? 0 : 2}  >
                            {
                                products?.sort((a, b) => getSortFunc(a, b, sort))?.map((item, id) => <Grid xs={12} sm={8} md={6} ><ProductCard data={item} /></Grid>)
                            }
                        </Grid.Container>
                    </div>

                </Grid>
                <Grid xs={0} md={4} direction='column'>
                    <Text h3>Sắp xếp</Text>
                    {sorts?.map((item, id) => <StyleLink
                        href={{
                            pathname: "/search",
                            search: '?' + new URLSearchParams({ category, brand, sort: item.value })
                        }}
                        isActive={sort == item.value}
                        underline key={id}>{item.label}</StyleLink>)}
                </Grid>

            </Grid.Container>
        </Page.Content>

        <Footer />

    </Page>
}

