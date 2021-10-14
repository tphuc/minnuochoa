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
  return <Link href={`/product/${data.id}`} width='100%' style={{display:"flex", width:200, justifyContent:"center", alignItems:"center"}} >
    <Card style={{ border: "none", maxWidth:200  }} width="100%" >
      <div style={{width:200, height:200, display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Image disableAutoResize className='product-image' scale={0.8} style={{ objectFit: "cover", objectPosition: "center center", width: 160 }} src={data.images[0].url}
       height='160px'  draggable={false} />
      </div>
      <Card.Content style={{ padding: 10, paddingTop:0, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <Text style={{width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis', margin:0}} truncate h6 mb={0}>{ data?.brand?.label}</Text>
        <Text style={{maxWidth:'100%', height:50,  textAlign:"center", overflow:"hidden", textOverflow:'ellipsis', }} truncate margin={0}>{data.label}</Text>
        {data?.variants?.length && <Text style={{fontSize:14, width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis'}} type="secondary" small>{formatNumber(parseLabelPrice(data.variants[0].label).price)} - {formatNumber( parseLabelPrice(data.variants[data.variants?.length - 1].label).price )}</Text>}
      </Card.Content>
    </Card>
  </Link>

}

