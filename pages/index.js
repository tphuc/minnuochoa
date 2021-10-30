import Head from 'next/head'
import Image from 'next/image'
import { Button, Spacer, Text, useMediaQuery, useTheme } from '@geist-ui/react'
import Nav from '../components/Nav'
import useCategories from '../frameworks/supabase/categories'
import useHightlightProducts from '../frameworks/supabase/hightlight-products'
import CategoryItem from '../components/CategoryItem'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { Facebook, Instagram } from '@geist-ui/react-icons'
import Link from 'next/link'
import _ from 'lodash';
export default function Home() {
  const { data: categories } = useCategories();
  const { data: hightlightproducts } = useHightlightProducts();
  const isMobile = useMediaQuery('mobile')
  const theme = useTheme();

  return (
    <div>
      <Head>
        <title>Min Perfume</title>
        <meta property="og:description" content="#minnuochoa - Chuyên nước hoa chính hãng giá tốt nhất thị trường"/>
        <meta property="og:image" content="https://res.cloudinary.com/minnuochoa-com/image/upload/v1634287131/logo_l1o0ln.png"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap" rel="stylesheet" /> */}
      </Head>
      <Nav />
      <Spacer h={6} />
      <div style={{ display: "block", boxSizing: 'border-box', margin: isMobile ? 0 : "20px", position: "relative", width: "calc(100vw-20px)", height: '60vh' }}>
        <Image layout='fill' alt='=' objectFit='cover' objectPosition='50% 34%' src={'https://res.cloudinary.com/minnuochoa-com/image/upload/v1635609506/bet_price_authentic_3_w7sbki.png'} />

        <div style={{ position: "absolute", width: "100%", height: "100%", padding: "5%", backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0))" }}>
          <Text style={{ color: "#ffffff" }} h2> Min Perfume </Text>
          <Text style={{ color: "#ffffff" }} p>Chuyên các dòng nước hoa chính hãng xách tay Pháp , Mỹ , Đức từ bình dân đến cao cấp </Text>

          <Link href={'/search'} passHref>
          <Button  width={100} auto scale={1.5} type='primary-light'> Xem các sản phẩm </Button>
          </Link>
          <br />
          <Spacer h={1}/>
          <div style={{cursor:'pointer'}}>
          <Link  passHref href='https://instagram.com/minnuochoa'><Instagram size={26} color='#fff'/></Link>
          <Link passHref href='https://facebook.com/minnuochoaa'><Facebook size={26} color='#fff'/></Link>
          </div>
          
        </div>
        <div style={{position:"absolute", bottom:10, width:"100%", display:"flex", justifyContent:"center"}}>
         
        </div>

      </div>

      <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center", padding: '20px 0px 20px 0px', flexWrap: "wrap", margin: "20px", position: "relative", width: "calc(100vw-20px)", background: theme.palette.accents_1 }}>
        {
          categories?.map((item, idx) => <CategoryItem data={item} key={idx} />)
        }
      </div>

        <Text style={{textAlign:"center"}} h3>Sản phẩm nổi bật</Text>
      <div style={{ justifyContent: "space-evenly", display: "block", margin: isMobile ? '0px' : "20px", padding: isMobile ? 5 : "5%", paddingTop: '5%', paddingBottom:'5%',  position: "relative", width: "calc(100vw-20px)", display: "flex", flexDirection: "row", flexWrap: "wrap", background: `linear-gradient( 45deg, ${theme.palette.accents_1}, ${theme.palette.accents_2})` }}>
        {
          _.shuffle(hightlightproducts || [])?.slice(0, 8)?.map((item, id) => <ProductCard showPrice={false} width={isMobile ? '40vw' : 320} height={isMobile ? '40vw' : 400} data={item} key={id} />)
        }
        <div style={{ display: 'flex', width:"100%", flexDirection: "column", alignItems:"center", justifyContent: 'center' }}>
          <Spacer h={2}/>
          <Link href='/search' passHref>
      <Button type='secondary' ghost>Xem tất cả sản phẩm</Button>
      </Link>
      </div>
        
      </div>
      

      <Footer />
    </div>
  )
}
