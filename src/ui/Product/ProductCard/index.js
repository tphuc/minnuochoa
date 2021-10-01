import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { formatNumber } from '../../../lib';

import './index.css'



export default function ProductCard({
  data,
  ...props
}) {

  const { palette } = useTheme()
  return <Link href='/product/123'>
    <Card style={{ border: "none", }} width="100%">

      <Image disableAutoResize className='product-image' style={{ objectFit: "cover", objectPosition: "center center", minWidth: 160 }} src="https://img.abercrombie.com/is/image/anf/KIC_163-6800-0002-165_prod1?policy=product-large"
        height="220px" width="100%" draggable={false} />
      <Card.Content style={{ padding: 0 }}>
        <Text h4 mb={0}>{data.name}</Text>
        <Text type="secondary" small>{formatNumber(data.variants[0].price)} - {formatNumber(data.variants[data.variants.length - 1].price)}</Text>
      </Card.Content>
    </Card>
  </Link>

}

