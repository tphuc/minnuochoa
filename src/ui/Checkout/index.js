import { Page, Spinner, Tabs, Grid, Card, Text, Button, Radio, Spacer, Input, useInput, useMediaQuery, Image, Link, Select, useTheme, Divider } from '@geist-ui/react';
import { CheckCircle, Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../dynamic/cart';
import { formatNumber } from '../../lib';
import Footer from '../Footer';
import Nav from '../Nav';
import CheckoutItem from './CheckoutItem';







export default function Checkout(props) {
    const { palette } = useTheme()

    const history = useHistory();
    const {data: cart, mutate: cartMutate} = useCart();

    const { state: name, setState: setName, reset, bindings: nameBindings } = useInput('')
    const [paymentMethod, setPaymentMethod] = React.useState('cash')

    const isMobile = useMediaQuery('mobile');



    const totalprice = React.useCallback(() => {
        if (!cart) {
            return 0;
        }
        var total = 0;
        cart?.map(item => { total += item?.variantSelected?.price * item.amount })

        return total
    }, [cart])

    const isMatchCategorySlug = React.useCallback((str) => {
        return location.pathname.includes(str)
    }, [location.pathname])




    return <Page render='effect' width='100%' >
        <Nav />
        <Page.Content>


            <Grid.Container gap={2} >
                <Grid xs={24} mx={1} md={12} direction='column' >
                    <Text h2 my={0}>Thanh toán</Text>
                    <Divider/>
                    <Input placeholder='Họ và tên' width='100%' {...nameBindings} />
                    <Spacer h={0.5} />
                    <Input placeholder='Số điện thoại' width='100%' />
                    <Spacer h={0.5} />
                    <Input placeholder='Địa chỉ' width='100%' />
                    <Spacer h={1} />
                    <Radio.Group title='Phương thức thanh toán' value={paymentMethod} onChange={(val) => setPaymentMethod(val)}>
                        <Radio value="cash"><Text my={0}>Thanh toán khi nhận hàng</Text></Radio>
                        <Radio value="transfer"><Text my={0}>Chuyển khoản / Momo</Text></Radio>
                    </Radio.Group>
                    <Spacer h={2} />
                    <Button scale={2} iconRight={<CheckCircle />} type='secondary-light'>Xác nhận</Button>
                </Grid>
                <Grid mx={1} xs={24} md={10} direction='column'>
                    <Text my={0} h4>Tổng cộng: <Text span small my={0}>{formatNumber(totalprice() + 30000)}</Text></Text>
                    <Divider/>
                    {cart?.map(item => <CheckoutItem data={item}/>)}
                </Grid>

            </Grid.Container>
        </Page.Content>

        <Footer/>

    </Page>
}

