import { Text, useTheme } from '@geist-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';




export default function StyleLink({
    isActive,
    href,
    style,
    underline = true,
    ...props
}) {
    const {palette} = useTheme();
    const history = useHistory()
    return (
    <Text 
        span
        onClick={(e) => {
            history.push(href)
        }} 
        style={{
            color: isActive ? palette.accents_8 : palette.accents_3,
            cursor: "pointer",
            textDecoration:  underline ?  'underline' : 'none',
            ...style
        }}
        {...props}
    >
        {props.children}
    </Text>)
}