import { Page, Spinner, Tabs, Grid, Card, Text, Button, Avatar, Spacer, useMediaQuery, Link, Image, useTheme } from '@geist-ui/react';
import { Navigation, ShoppingBag } from '@geist-ui/react-icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Nav from '../../components/Nav';
import useCategories from '../../dynamic/category';





export default function Home(props) {

    const history = useHistory();
    const location = useLocation();
    const {palette} = useTheme()

    const { data: categories, isError, isLoading } = useCategories();
    const isMobile = useMediaQuery('mobile')

    return <Page render='effect' width='100%' >
        <Nav/>


        <Page.Content></Page.Content>






    </Page>
}

