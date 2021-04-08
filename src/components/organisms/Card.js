import React from 'react';
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements/dist/image/Image';
import TextH3 from '../atoms/TextH3';
import DateBox from '../molecules/DateBox';
import EpisodeInfo from '../molecules/EpisodeInfo';


const Card = (props) => {

  const item = props.item;

    return ( 
      <View style={ {...props.style, 
        flexDirection: 'column',
        width: '100%'
      }}>
        <View style={styles.content}>
  
          <Image
            source={{ uri: item?.show?.image?.medium }}
            style={styles.image}
            transition={true}
            PlaceholderContent={<ActivityIndicator />}></Image>
  
          <DateBox style={styles.dateBox} year={item?.airdate?.split('-')[0]} month={item?.airdate?.split('-')[1]} day={item?.airdate?.split('-')[2]}></DateBox>
  
          <View style={styles.detail}>
  
            <TextH3 style={styles.title} numberOfLines={2}>{item?.name}</TextH3>
  
            <EpisodeInfo style={styles.episodeInfo}  season={item?.season} episode={item?.number}></EpisodeInfo>
  
          </View>
  
        </View>
  
  
      </View>
    );
 

};



const styles = StyleSheet.create({

  content: {
    backgroundColor: '#3C948B',
    borderRadius: 5
  },
  dateBox: {
    position: 'absolute',
    right: 0,
    top: 210
  }, 
  title: {
    width: '100%',
    color: '#FFF'
  },
  summary: {
    width: '100%'
  },
  detail: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    height: 120
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 5
  },
  episodeInfo: {
    width: '100%'
  }
});

export default Card;