import React from 'react';
import {Text } from "react-native";

const TextSmall =({children, style, numberOfLines} = props) => {
    return (
        <Text style={{...style, fontSize:12}} numberOfLines={numberOfLines}>{children}</Text>
    );
};

export default TextSmall;