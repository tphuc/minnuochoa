import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Image, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useCategories from '../../dynamic/category';





export default function Home(props) {

    const history = useHistory();
    const location = useLocation();
    const {palette} = useTheme()

    const { data: categories, isError, isLoading } = useCategories();
    const isMobile = useMediaQuery('mobile')

    return <Page render='effect' width='100%' >
        <Page.Header style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >

<Image disableSkeleton={true} height='60px' width='auto' style={{cursor:"pointer"}} onClick={() => history.push('/')} src="https://cdn.dribbble.com/users/3812993/screenshots/9843080/media/74c2871ed47c78d31d47b4cc949a8914.png?compress=1&resize=400x300" />
<Spacer y={0.2} />
{!isMobile && categories?.map((item, id) => <Link block href={`/search?category=${item.name}`}  style={{ color: palette.accents_8, marginLeft: "10px" }} key={id}>{item.name}</Link>)}
<div style={{ flex: 1 }} />
<Button iconRight={<ShoppingBag />} auto scale={2 / 3} />
<Spacer y={0.2} />

</Page.Header>


        <Page.Content></Page.Content>






    </Page>
}

