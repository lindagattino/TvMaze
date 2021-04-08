import React from 'react';
import {Text } from "react-native";

const TextH1 =({children, style, numberOfLines} = props) => {
    return (
        <Text style={{...style, fontSize:26, fontWeight:'bold'}} numberOfLines={numberOfLines}>{children}</Text>
    );
};

export default TextH1;