import React from 'react';
import {Text } from "react-native";

const TextH3 =({children, style, numberOfLines} = props) => {
    return (
        <Text style={{...style, fontSize:16, fontWeight:'bold'}} numberOfLines={numberOfLines}>{children}</Text>
    );
};

export default TextH3;