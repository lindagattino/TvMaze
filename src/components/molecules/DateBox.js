import React from 'react';
import { View } from 'react-native';
import TextBody from '../atoms/TextBody';
import TextH1 from '../atoms/TextH1';

const DateBox = ({ style, year, month, day } = props) => {
    return (
        <View style={{...style,  
                flexDirection: 'column',
                padding: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderColor: '#555',
                borderWidth: 1,
                borderRadius: 5,
                alignItems:'center',
                justifyContent: 'center'
            }} >

            <TextBody style={{ fontWeight:'bold', color: '#999', padding: 0 }} numberOfLines={1}>{year}</TextBody>
            <TextH1 style={{ color: '#3C948B', lineHeight: 30 }} numberOfLines={1}>{month}</TextH1>
            <TextH1 style={{ color: '#FFF', padding: 0, lineHeight: 30 }} numberOfLines={1}>{day}</TextH1>

        </View>
    );
}

export default DateBox;

