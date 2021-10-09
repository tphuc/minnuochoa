import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Image, Link, Select, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { formatNumber, parseLabelPrice, toArray } from '../../../lib';


import './index.css'


export default function ProductCard({
  data,
  ...props
}) {

  const { palette } = useTheme()
  return <Link href={`/product/${data.id}`} width='100%'>
    <Card style={{ border: "none", }} width="100%" {...props}>

      <Image disableAutoResize className='product-image' scale={0.8} style={{ objectFit: "contain", objectPosition: "center center", minWidth: 160 }} src={data.images[0].name}
        height="160px" width="100%" draggable={false} />
      <Card.Content style={{ padding: 10, paddingTop:0, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <Text style={{width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis', margin:0}} truncate h6 mb={0}>{ toArray(data.brands)[0].label}</Text>
        <Text style={{width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis', WebkitLineClamp:2,  }} truncate margin={0}>{data.label}</Text>
        <Text style={{fontSize:14, width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis'}} type="secondary" small>{formatNumber(parseLabelPrice(data.variants[0].label).price)} - {formatNumber( parseLabelPrice(data.variants[data.variants.length - 1].label).price )}</Text>
      </Card.Content>
    </Card>
  </Link>

}

