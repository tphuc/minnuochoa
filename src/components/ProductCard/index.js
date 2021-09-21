import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';

import './index.css'



export default function ProductCard({
  product,
  ...props
}) {

  const { palette } = useTheme()
  return <Link href='/product/123'>
    <Card style={{ border: "none", }} width="100%">

      <Image disableAutoResize className='product-image' style={{objectFit:"cover", objectPosition:"center center"}} src="https://img.abercrombie.com/is/image/anf/KIC_163-6800-0002-165_prod1?policy=product-large"
        height="260px" width="100%" draggable={false} />
<Card.Content style={{padding:0}}>
      <Text h4 mb={0}>Geist UI React</Text>
      <Text type="secondary" small>564.000 đ</Text>
      </Card.Content>
    </Card>
  </Link>

}

