import React from 'react';
import { View } from 'react-native';
import TextSmall from '../atoms/TextSmall';

const EpisodeInfo = ({style, season, episode } = props) => {

    return (
        <View style={{...style,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        }}>

            <TextSmall style={{ fontWeight: 'bold' }}>{'Season: '+season}</TextSmall>
            <TextSmall>{'Episode '+episode}</TextSmall>

        </View>
    );
}

export default EpisodeInfo;