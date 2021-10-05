import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Divider, Collapse, Description } from '@geist-ui/react';
import { Navigation, ShoppingBag, ShoppingCart } from '@geist-ui/react-icons';
import Cookies from 'js-cookie';
import React from 'react';
import useCart from '../../../swr/cart';
import { formatNumber, parseLabelPrice } from '../../../lib';



const data = [
    {
        img: "https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_2.jpg"
    },
    {
        img: "https://staticimg.titan.co.in/Skinn/Catalog/FW03PFC_1.jpg"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplu70dSFKmcgD7oyLnXa1jC67xYKn9A6_ag&usqp=CAU"
    },
]




export default function ProductSidebar({
    data,
    ...props
}) {

    const { palette } = useTheme();
    const [activeVariantIndex, setActiveVariantIndex] = React.useState(0);

    const { mutate: cartMutate } = useCart()
    const addToCart = () => {
        let lineItems = JSON.parse(Cookies.get('cart') || '[]');
        Cookies.set('cart', JSON.stringify([...lineItems, {...data, variantSelected: data.variants[activeVariantIndex], amount: 1 }]))
        cartMutate([...lineItems, data])
    }

    return <div style={{ position: "relative", width:"100%" }}>
        <Text h2 mt={0}>{data?.label}</Text>
        <Text h3>Dung tích</Text>

        {
            data?.variants?.map((item, idx) => <Button onClick={() => setActiveVariantIndex(idx)} type={activeVariantIndex == idx ? 'secondary-light' : 'default'} mr={1} auto>{parseLabelPrice(item?.label).label}</Button>)
        }

        <Spacer h={0.5} />
        <Text type='success' >{ formatNumber( parseLabelPrice(data?.variants?.[activeVariantIndex]?.label).price) }</Text>
        <Divider/>
        <Description title={<Text marginBottom={0} h5>Xuất xứ</Text>} content={<Text >{data?.origin?.map(item => item.label)}</Text>} />
        <Description title={<Text marginBottom={0} h5>Giới tính</Text>} content={<Text >{data?.gender?.map(item => item.label)}</Text>} />
        <Description title={<Text marginBottom={0} h5>Phong cách</Text>} content={<Text >{data?.style?.map(item => item.label)}</Text>} />
        <Spacer h={1} />
        <Divider/>
        <Button 
        // onClick={addToCart} 
        scale={2} type='secondary-light' iconRight={<ShoppingBag />} width='100%'>Thêm vào giỏ</Button>
        <Collapse.Group>
            <Collapse title={<Text h4>Giới thiệu</Text>}>
                <p dangerouslySetInnerHTML={{__html:data?.descriptionHtml}}></p>
            </Collapse>
        </Collapse.Group>

    </div>
}

