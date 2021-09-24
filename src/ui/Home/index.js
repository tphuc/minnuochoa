import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Image, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useCategories from '../../dynamic/category';
import Footer from '../Footer';
import Nav from '../Nav';





export default function Home(props) {

    const history = useHistory();
    const location = useLocation();
    const { palette } = useTheme()

    const { data: categories, isError, isLoading } = useCategories();
    const isMobile = useMediaQuery('mobile')

    return <Page render='effect' width='100%' >
        <Nav />
        <Page.Content>
            <Grid.Container gap={2} >
                <Grid xs={24} md={14} >
                    
                </Grid>
                <Grid xs={24} md={8}>

                </Grid>

            </Grid.Container>
        </Page.Content>

        <Footer/>

    </Page>
}

