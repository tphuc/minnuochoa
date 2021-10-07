import { Text, useTheme } from '@geist-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css'



export default function StyleLink({
    isActive,
    inactiveColor,
    href,
    style,
    underline = true,
    ...props
}) {
    const {palette} = useTheme();
    const history = useHistory()
    return (
    <Text 
        // className='styled-link'
        span
        onClick={(e) => {
            history.push(href)
        }} 
        style={{
            color: isActive ? palette.accents_8 : inactiveColor ? inactiveColor : palette.accents_3,
            cursor: "pointer",
            textDecoration:  underline ?  'underline' : 'none',
            ...style
        }}
        {...props}
    >
        {props.children}
    </Text>)
}