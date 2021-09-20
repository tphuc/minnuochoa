import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useBrands from '../../dynamic/brand';

import useCategories from '../../dynamic/category';
import useSorts from '../../dynamic/sort';
import { getSlug, useQuery } from '../../lib';
import { filterQuery, useSearchMeta, getBrandPath } from '../../lib/use-search-meta';







export default function Search(props) {
    const { palette } = useTheme()

    const history = useHistory();
    const location = useLocation();

    const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useCategories();
    const { data: brands, isError: isBrandsError, isLoading: isBrandsLoading } = useBrands();
    const { data: sorts } = useSorts();
    const isMobile = useMediaQuery('mobile');



    const isMatchCategorySlug = React.useCallback((str) => {
        return location.pathname.includes(str)
    }, [location.pathname])




    const sort = useQuery().get('sort')
    const category = useQuery().get('category')
    const brand = useQuery().get('brand')
    console.log(category, brand, sort)


    return <Page render='effect' width='100%' >
        <Page.Header style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >

            <Image disableSkeleton={true} height='60px' width='auto' style={{ cursor: "pointer" }} onClick={() => history.push('/')} src="https://cdn.dribbble.com/users/3812993/screenshots/9843080/media/74c2871ed47c78d31d47b4cc949a8914.png?compress=1&resize=400x300" />
            <Spacer y={0.2} />
            {!isMobile && categories?.map((item, id) => <Link block href={`/search?category=${item.name}&brand=${brand}&sort=${sort}`} style={{ color: palette.accents_8, marginLeft: "10px" }} key={id}>{item.name}</Link>)}
            <div style={{ flex: 1 }} />
            <Button iconRight={<ShoppingBag />} auto scale={2 / 3} />
            <Spacer y={0.2} />

        </Page.Header>
        <Page.Content>
            {isMobile && <>
                <Select width='100%' placeholder="Danh mục" onChange={(val) => {
                    history.replace(`/search?category=${val}&brand=${brand}&sort=${sort}`)
                }} >
                    {categories?.map((item, id) => <Select.Option value={item.name} key={id}>{item.name}</Select.Option>)}
                </Select>
                <Select width='100%' placeholder="Hãng" onChange={(val) => {
                    history.replace(`/search?category=${category}&brand=${val}&sort=${sort}`)
                }} >
                    {brands?.map((item, id) => <Select.Option value={item.name} key={id}>{item.name}</Select.Option>)}
                </Select>
                <Select width='100%' placeholder="Sắp xếp" onChange={(val) => {
                    history.replace(`/search?category=${category}&brand=${brand}&sort=${val}`)
                }} >
                    {sorts?.map((item, id) => <Select.Option value={item.value} key={id}>{item.name}</Select.Option>)}
                </Select>
            </>}

            <Grid.Container gap={2} justify="center">
                <Grid xs={0} md={4} pl='2%' direction='column'>
                    <Text h3>Danh mục</Text>
                    {categories?.map((item, id) => <Link
                        href={`/search?category=${item.name}&brand=${brand}&sort=${sort}`}
                        //  onClick={(e) => {
                        //     e.preventDefault()
                        //     history.push(`/search/${item.path}`)
                        // }} 
                        style={{ color: category == item.name ? palette.accents_7 : palette.accents_3, }} color underline key={id}>{item.name}</Link>)}

                    <Spacer h={3} />
                    <Text h3>Hãng</Text>
                    {brands?.map((item, id) => <Link
                        href={`/search?category=${category}&brand=${item.name}&sort=${sort}`}
                        style={{ color: brand == item.name ? palette.accents_7 : palette.accents_3, }} color underline key={id}>{item.name}</Link>)}
                </Grid>
                <Grid xs={0} md={16}>

                </Grid>
                <Grid xs={0} md={4} direction='column'>
                    <Text h3>Sắp xếp</Text>
                    {sorts?.map((item, id) => <Link
                        href={`/search?category=${category}&brand=${brand}&sort=${item.value}`}
                        style={{ color: sort == item.value ? palette.accents_7 : palette.accents_3, }} color underline key={id}>{item.name}</Link>)}
                </Grid>

            </Grid.Container>
        </Page.Content>

        {/* </Page.Header> */}






    </Page>
}

