import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Select, useTheme } from '@geist-ui/react';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { formatNumber, parseLabelPrice } from '../../utils';


export default function ProductCard({
  showPrice = true,
  data,
  width = 200,
  height = 200,
  ...props
}) {

  const { palette } = useTheme()
  return <Link href={`/product/${data.id}`} passHref={false} width='100%' style={{display:"flex", width:width, margin:10, justifyContent:"center", alignItems:"center"}} >
    <div style={{ border: "none", cursor:"pointer", maxWidth:width  }} width="100%" >
      <div style={{width:width, height:height, position:"relative", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Image objectFit='cover' alt='-' src={data?.images[0].url} layout='fill'/>
      </div> 
      <div style={{ padding: 10, paddingTop:0, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <Text style={{width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis', margin:0}} truncate h6 mb={0}>{ data?.brand?.label}</Text>
        <Text style={{maxWidth:'100%', fontWeight:"300", height:50,  textAlign:"center", overflow:"hidden", textOverflow:'ellipsis', }} truncate margin={0}>{data.label}</Text>
        {data?.variants?.length && showPrice && <Text  style={{fontSize:14, width:'100%', textAlign:"center", whiteSpace:"nowrap", overflow:"hidden", textOverflow:'ellipsis', color: palette.accents_5}} type="secondary" small>{formatNumber(parseLabelPrice(data.variants[0].label).price)} - {formatNumber( parseLabelPrice(data.variants[data.variants?.length - 1].label).price )}</Text>}
      </div>
    </div>
  </Link>

}

