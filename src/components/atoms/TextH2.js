import React from 'react';
import {Text } from "react-native";

const TextH2 =({children, style, numberOfLines} = props) => {
    return (
        <Text style={{...style, fontSize:24, fontWeight:'bold'}} numberOfLines={numberOfLines}>{children}</Text>
    );
};

export default TextH2;