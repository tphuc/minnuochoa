import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Drawer, Badge } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useCategories from '../../dynamic/category';



export default function Nav() {

    const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useCategories();
    const { palette } = useTheme();
    const [openCart, setOpenCart] = useState(false)
    const isMobile = useMediaQuery('mobile');
    const history = useHistory()

    return <>
        <Drawer visible={openCart} onClose={() => setOpenCart(false)} style={{ borderRadius: 0 }} placement="right">
            <Drawer.Title>Giỏ hàng</Drawer.Title>
            <Drawer.Subtitle>This is a drawer</Drawer.Subtitle>
            <Drawer.Content>
                <p>Some content contained within the drawer.</p>
            </Drawer.Content>
        </Drawer>

        <Page.Header style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
            <Image disableSkeleton={true} height='60px' width='auto' style={{ cursor: "pointer" }} onClick={() => history.push('/')} src="https://cdn.dribbble.com/users/3812993/screenshots/9843080/media/74c2871ed47c78d31d47b4cc949a8914.png?compress=1&resize=400x300" />
            <Spacer y={0.2} />
            {!isMobile && categories?.map((item, id) => <Link block href={`/search?category=${item.name}`} style={{ color: palette.accents_8, marginLeft: "10px" }} key={id}>{item.name}</Link>)}
            <div style={{ flex: 1 }} />
            <Badge.Anchor>
                <Badge scale={0.5} >1</Badge>
                <Button onClick={() => setOpenCart(true)} iconRight={<ShoppingBag />} auto scale={2 / 3} />
            </Badge.Anchor>
            <Spacer y={0.2} />
        </Page.Header>

    </>
}