import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { formatNumber, parseLabelPrice } from '../../../lib';


import './index.css'


export default function ProductCard({
  data,
  ...props
}) {

  const { palette } = useTheme()
  return <Link href={`/product/${data.id}`}>
    <Card style={{ border: "none", }} width="100%">

      <Image disableAutoResize className='product-image' style={{ objectFit: "cover", objectPosition: "center center", minWidth: 160 }} src={data.images[0].name}
        height="220px" width="100%" draggable={false} />
      <Card.Content style={{ padding: 0 }}>
        <Text h4 mb={0}>{data.label}</Text>
        <Text type="secondary" small>{formatNumber(parseLabelPrice(data.variants[0].label).price)} - {formatNumber( parseLabelPrice(data.variants[data.variants.length - 1].label).price )}</Text>
      </Card.Content>
    </Card>
  </Link>

}

