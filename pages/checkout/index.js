import { Page, Spinner, Tabs, Grid, Card, Text, Button, Radio, Spacer, Input, useInput, useMediaQuery, Image, Link, Select, useTheme, Divider, Description, useToasts } from '@geist-ui/react';
import { CheckCircle, } from '@geist-ui/react-icons';
import React from 'react';

import { formatNumber, totalprice } from '../../utils';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import CheckoutItem from '../../components/CheckoutItem';
import Cookies from 'js-cookie';
import { OrderCrud } from '../../frameworks/supabase/order';
import useCart from '../../frameworks/supabase/cart';
import { useRouter } from 'next/router';







export default function Checkout(props) {
    const { palette } = useTheme()
    const router = useRouter()

    const { data: cart, mutate: cartMutate } = useCart();
    const shippingCost = 30000;

    const { state: name, setState: setName,  bindings: nameBindings } = useInput('')
    const { state: phone, setState: setPhone,  bindings: phoneBindings } = useInput('')
    const { state: address, setState: setAddress,  bindings: addressBindings } = useInput('')

    const [paymentMethod, setPaymentMethod] = React.useState('cash')

    const [toasts, setToast] = useToasts()




    const confirm = async () => {
        console.log({
            name,
            phone,
            address,
            paymentMethod,
            cart
        })

        if(!cart.length){
            setToast({
                text:"Giỏ hàng trống",
                type:"warning"
            })
            return
        }
        if(!name || !phone || !address || !paymentMethod){
            setToast({
                text:"Vui lòng điền đầy đủ thông tin",
                type:"warning"
            })
            return
        }
        try{ 
            let res = await OrderCrud.create({
                name,
                phone,
                address,
                paymentMethod,
                cart,
                total: totalprice(cart) + shippingCost
            })
            if(!res.error){
                
                setToast({
                    text:"Đặt hàng thành công",
                    type:"success"
                })
                Cookies.set('cart', '')
                cartMutate([])
                router.push('/search')
            }
            
           
        }
        catch(e){
            setToast({
                text:"Đặt bị lỗi xin thử lại",
                type:"error"
            })


        }
      



    }

    return <Page render='effect' width='100%' >
        <Nav layout='responsive' showCategories={false} />
        <Page.Content style={{ minHeight: "80vh" }}>
            <Grid.Container gap={2} >
                <Grid xs={24} mx={1} md={12} direction='column' >
                    <Text h2 my={0}>Thanh toán</Text>
                    <Divider />
                    <Input placeholder='Họ và tên' width='100%' {...nameBindings} />
                    <Spacer h={0.5} />
                    <Input placeholder='Số điện thoại' width='100%' {...phoneBindings} />
                    <Spacer h={0.5} />
                    <Input placeholder='Địa chỉ' width='100%' {...addressBindings} />
                    <Spacer h={1} />
                    <Radio.Group title='Phương thức thanh toán' value={paymentMethod} onChange={(val) => setPaymentMethod(val)}>
                        <Radio value="cash"><Text my={0}>Thanh toán khi nhận hàng</Text></Radio>
                        <Radio value="transfer"><Text my={0}>Chuyển khoản ngân hàng / Momo</Text></Radio>
                    </Radio.Group>
                    {
                        paymentMethod == 'transfer' &&
                        <Card style={{ backgroundColor: palette.accents_1 }} >
                            <Description title='Chuyển khoản Ngân hàng' content={
                                <div>
                                    <Text my={0} b h6>Số tài khoản 060134843031</Text>
                                    <Text my={0} b h6>Ngân hàng Sacombank</Text>
                                    <Text my={0} b h6>Trần Minh Quang</Text>
                                </div>
                            } />
                            <Spacer h={1} />
                            <Description title='Chuyển khoản Momo' content={<Text b>0777039286</Text>} />


                        </Card>
                    }
                    <Spacer h={2} />
                    <Button onClick={confirm} scale={2} iconRight={<CheckCircle />} type='secondary-light'>Xác nhận</Button>
                </Grid>
                <Grid mx={1} xs={24} md={10} direction='column'>
                    <Text my={0} h4>Tổng cộng: <Text span small my={0}>{formatNumber(totalprice(cart) + 30000)}</Text></Text>
                    <Divider />
                    {cart?.map((item, id) => <CheckoutItem key={id} data={item} />)}

                    <Spacer h={1} />
                    <Divider />

                </Grid>

            </Grid.Container>
        </Page.Content>

        <Footer />

    </Page>
}

