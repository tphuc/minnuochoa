import Head from 'next/head'
import Image from 'next/image'
import { Button, Spacer, Text, useTheme } from '@geist-ui/react'
import Nav from '../components/Nav'
import useCategories from '../frameworks/supabase/categories'
import useHightlightProducts from '../frameworks/supabase/hightlight-products'
import CategoryItem from '../components/CategoryItem'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { Facebook, Instagram } from '@geist-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  const { data: categories } = useCategories();
  const { data: hightlightproducts } = useHightlightProducts();

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
      <div style={{ display: "block", boxSizing: 'border-box', margin: "20px", position: "relative", width: "calc(100vw-20px)", height: '60vh' }}>
        <Image layout='fill' alt='=' objectFit='cover' objectPosition='50% 34%' src={'https://res.cloudinary.com/minnuochoa-com/image/upload/v1633691914/244973743_2349931545143229_7997632194508024423_n_dmff7e.jpg'} />

        <div style={{ position: "absolute", width: "100%", height: "100%", padding: "5%", backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0))" }}>
          <Text style={{ color: "#ffffff" }} h2> Min Perfume </Text>
          <Text style={{ color: "#ffffff" }} p>Chuyên các dòng nước hoa chính hãng xách tay Pháp , Mỹ , Đức từ bình dân đến cao cấp </Text>

          
          <Button onClick={() => history.push('/search')} width={100} auto scale={1.5} type='primary-light'> Xem các sản phẩm </Button>
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

      <div style={{ justifyContent: "space-evenly", display: "block", margin: "20px", padding: "5%", position: "relative", width: "calc(100vw-20px)", display: "flex", flexDirection: "row", flexWrap: "wrap", background: `linear-gradient( 45deg, ${theme.palette.accents_1}, ${theme.palette.accents_2})` }}>
        {
          hightlightproducts?.slice(0, 8)?.map((item, id) => <ProductCard width={320} height={400} data={item} key={id} />)
        }
        <div style={{ display: 'flex', width:"100%", flexDirection: "column", alignItems:"center", justifyContent: 'center' }}>
          <Spacer h={2}/>
      <Button type='secondary' ghost>Xem tất cả sản phẩm</Button>
      </div>
        
      </div>
      

      <Footer />
    </div>
  )
}
