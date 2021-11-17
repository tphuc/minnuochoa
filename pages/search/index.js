import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Select, useTheme, Breadcrumbs, Divider } from '@geist-ui/react';
import React from 'react';

import Link from 'next/link';
import useProducts from '../../frameworks/supabase/products';
import useCategories from '../../frameworks/supabase/categories';
import useBrands from '../../frameworks/supabase/brands';
import ProductCard from '../../components/ProductCard';
import useSorts from '../../frameworks/supabase/sort';
import { useRouter } from 'next/router'
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';




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

    const [filter, setFilter] = React.useState({});
    const theme = useTheme();
    const { data: categories } = useCategories();
    const { data: brands } = useBrands();
    const { data: products, isLoading: isProductsLoading } = useProducts(filter);
    const { data: sorts } = useSorts();
    const { category, brand, sort } = useRouter().query
    const [search, setSearch] = React.useState('')
    const router = useRouter()
console.log(categories)
    const isMobile = useMediaQuery('mobile')

    React.useEffect(() => {
        let filter = { brand, category, sort, search }

        setFilter(filter)
       
    }, [sort, brand, category, search])


    return <Page padding={0} render='effect-seo' width='100%' >
        <Nav showCategories={false} logoLeft search layout='relative' onSearch={(val) => {
            setSearch(val)
            console.log(val)
        }}/>
        <style jsx>
            {`
                a{
                    color: ${theme.palette.accents_7}
                }
            `}
        </style>

        <Spacer h={2} />
        <Page.Content margin={0} style={{ minHeight: "80vh" }}>
            {isMobile && <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Text b h4>Tìm nước hoa bạn muốn</Text>
                <Select width='100%' placeholder="Danh mục" onChange={(val) => {
                    
                    router.push({
                        pathname: '/search',
                        query: { category: val || '', brand: brand || '', sort: sort || '' }
                    })
                }} >
                    {categories?.map((item, id) => <Select.Option value={item?.id?.toString()} key={id}>{item.label}</Select.Option>)}
                </Select>
                <Spacer h={0.2} />
                <Select width='100%' placeholder="Hãng" onChange={(val) => {
                    router.push({
                        pathname: '/search',
                        query: { category: category || '', brand: val || '', sort: sort || '' }
                    })
                }} >
                    {brands?.map((item, id) => <Select.Option value={item?.id?.toString()} key={id}>{item.label}</Select.Option>)}
                </Select>
                <Spacer h={0.2} />
                <Select width='100%' placeholder="Sắp xếp" onChange={(val) => {
                    router.push({
                        pathname: '/search',
                        query: { category: category || '', brand: brand || '', sort: val }
                    })
                }} >
                    {sorts?.map((item, id) => <Select.Option value={item.value} key={id}>{item.label}</Select.Option>)}
                </Select>
                <Spacer h={2} />
            </div>}

            <Grid.Container width='100vw'  >
                <Grid xs={0} md={4} pl='2%' direction='column'>
                    <Text h3>Danh mục</Text>
                    <Link
                        href={{
                            pathname: '/search',
                            query: { category: '', brand: brand || '', sort: sort || '' }
                        }}
                    >
                        <a>Tất cả</a>
                    </Link>
                    {categories?.map((item, id) => <Link
                        href={{
                            pathname: '/search',
                            query: { category: item.id, brand: brand || '', sort: sort || '' }
                        }}

                        key={id}><a style={{textDecoration: category == item.id ? "underline": 'none'}}>{item.label}</a></Link>)}

                    <Spacer h={3} />
                    <Text h3>Hãng</Text>
                    <Link
                        href={{
                            pathname: '/search',
                            query: { category: category || '', brand: brand || '', sort: sort || '' }
                        }}
                    >
                        <a>Tất cả</a>
                    </Link>

                    {brands?.map((item, id) => <Link
                        href={{
                            pathname: '/search',
                            query: { category: category || '', brand: item.id, sort: sort || '' }
                        }}
                        key={id}><a style={{textDecoration: brand == item.id ? "underline": 'none'}}>{item.label}</a></Link>)}
                </Grid>
                <Grid xs={24} md={16} width='100%' height={'auto'}  >

                    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        {products?.length == 0 && <Text>Không tìm thấy nước hoa phù hợp</Text>}
                        {isProductsLoading && <Spinner />}


                        <Grid.Container direction='row' justify='flex-start' gap={isMobile ? 0 : 2}  >
                            {
                                products?.map((item, id) => <Grid key={id} xs={12} sm={8} md={6} ><ProductCard data={item} /></Grid>)
                            }
                        </Grid.Container>
                    </div>

                </Grid>
                <Grid xs={0} md={4} direction='column'>
                    <Text h3>Sắp xếp</Text>
                    {sorts?.map((item, id) => <Link
                        href={{
                            pathname: '/search',
                            query: { category: category || '', brand: brand || '', sort: item.value }
                        }}

                         key={id}><a style={{textDecoration: sort == item.value ? "underline": 'none'}}>{item.label}</a></Link>)}
                </Grid>

            </Grid.Container>
        </Page.Content>
        <Divider/>
        <Footer/>



    </Page>
}

