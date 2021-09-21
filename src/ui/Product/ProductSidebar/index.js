import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme, Divider,Collapse } from '@geist-ui/react';
import { Navigation, ShoppingBag, ShoppingCart } from '@geist-ui/react-icons';
import React from 'react';



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



export default function ProductSidebar(props) {

    const { palette } = useTheme();


    return <div style={{ position: "relative" }}>
        <Text h3>Dung tích</Text>

        <Button mr={1} type='secondary-light' auto>120ml</Button>
        <Button mr={1} auto>220ml</Button>

        <Spacer h={2} />
        <Text p mt={0}>
            Specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.
        </Text>
        <Button scale={2} type='secondary-light' iconRight={<ShoppingBag />} width='100%'>Thêm vào giỏ</Button>
        <Collapse.Group>
            <Collapse title="Đánh giá">
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
            <Collapse title="Chính sách">
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
        </Collapse.Group>

    </div>
}

