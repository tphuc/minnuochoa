import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Divider, Collapse, Description } from '@geist-ui/react';
import { Navigation, ShoppingBag, ShoppingCart } from '@geist-ui/react-icons';
import Cookies from 'js-cookie';
import React from 'react';
import useCart from '../../frameworks/supabase/cart';
import { formatNumber, parseLabelPrice } from '../../utils';



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

        let { id, label, images, variants, ...fields } = data

        let lineItems = JSON.parse(Cookies.get('cart') || '[]');
        Cookies.set('cart', JSON.stringify([...lineItems, { id, label, images, variant: variants[activeVariantIndex], amount: 1 }]))
        cartMutate()
    }

    return <div style={{ position: "relative", width: "100%" }}>
        {data?.isNew || true && <div style={{ display: "inline", zIndex: 1, top: 0, left: 0, padding: '2px 5px', backgroundColor: "yellow" }}>
            new
        </div>}
        {data?.isHot || true && <div style={{ display: "inline", zIndex: 1, top: 0, right: 0, color: "white", padding: '2px 5px', backgroundColor: "crimson" }}>
            hot
        </div>}
        <Text h2 mt={0}>{data?.label}</Text>

        <Text h3>Dung tích</Text>

        {
            data?.variants?.map((item, idx) => <Button key={idx} onClick={() => setActiveVariantIndex(idx)} type={activeVariantIndex == idx ? 'secondary-light' : 'default'} mr={1} auto>{parseLabelPrice(item?.label).label}</Button>)
        }

        <Spacer h={0.5} />
        <Text h3 type='success' >{data?.variants?.[activeVariantIndex]?.label ? formatNumber(parseLabelPrice(data?.variants?.[activeVariantIndex]?.label).price) : ''}</Text>
        <Divider />
        <Description title={<Text marginBottom={0} h5>Xuất xứ</Text>} content={<Text >{data?.origin}</Text>} />
        <Description title={<Text marginBottom={0} h5>Giới tính</Text>} content={<Text >{data?.gender}</Text>} />
        <Description title={<Text marginBottom={0} h5>Phong cách</Text>} content={<Text >{data?.style}</Text>} />
        <Spacer h={1} />
        <Divider />
        <Button
            onClick={addToCart}
            scale={2} type='secondary-light' iconRight={<ShoppingBag />} width='100%'>Thêm vào giỏ</Button>
        <Collapse.Group style={{ width: "100%" }}>
            <Collapse style={{ width: "100%" }} title={<Text h4>Giới thiệu</Text>}>
                <div className='content-description' style={{ width: "100%", whiteSpace: 'break-spaces' }} dangerouslySetInnerHTML={{ __html: data?.introduction }}></div>
            </Collapse>
        </Collapse.Group>


    </div>
}

