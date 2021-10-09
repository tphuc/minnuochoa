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
    <div 
        className='styled-link'
        span
        onClick={(e) => {
            history.push(href)
        }} 
        style={{
          
            cursor: "pointer",
            textDecoration:  isActive ?  'underline' : 'none',
            ...style
        }}
        {...props}
    >
        {props.children}
    </div>)
}