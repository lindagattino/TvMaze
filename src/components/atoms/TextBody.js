import React from 'react';
import {Text } from "react-native";

const TextBody =({children, style, numberOfLines} = props) => {
    return (
        <Text style={{...style, fontSize:14}} numberOfLines={numberOfLines}>{children}</Text>
    );
};

export default TextBody;