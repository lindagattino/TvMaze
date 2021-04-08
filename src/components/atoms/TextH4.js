import React from 'react';
import {Text } from "react-native";

const TextH4 =({children, style, numberOfLines} = props) => {
    return (
        <Text style={{...style, fontSize:14, fontWeight:'bold'}} numberOfLines={numberOfLines}>{children}</Text>
    );
};

export default TextH4;