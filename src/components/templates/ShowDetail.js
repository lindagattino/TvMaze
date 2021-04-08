import React from 'react';
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements/dist/image/Image';
import EpisodeInfo from '../molecules/EpisodeInfo';
import TextH2 from '../atoms/TextH2';
import { useRoute } from '@react-navigation/core';
import HTML from 'react-native-render-html';
import { Button } from 'react-native-elements';
import { Linking } from 'react-native';


const ShowDetail = (props) => {

  const route = useRoute();
  const data = route?.params?.show;

  const onPress = () => {
    Linking.openURL(data.show.url)
  }


  return (
    <View style={{
      ...props.style,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: 10,
      flex: 1
    }}>

      <TextH2 style={styles.title} numberOfLines={2}>{data?.name}</TextH2>


      <Image
        source={{ uri: data?.show?.image?.medium }}
        style={styles.image}
        transition={true}
        PlaceholderContent={<ActivityIndicator />}></Image>

      <HTML source={{ html: data?.summary }} style={styles.summary} contentWidth={100}></HTML>


      <View style={styles.detail}>

        <EpisodeInfo style={styles.episodeInfo} season={data?.season} episode={data?.number}></EpisodeInfo>
        <Button style={styles.watch} onPress={onPress} title="watch"></Button>

      </View>


    </View>

  );
}


const styles = StyleSheet.create({

  content: {
    flexDirection: 'row',
    flex:1
  },
  title: {
    marginBottom: 10,
    width: '100%'
  },
  summary: {
    padding: 10
  },
  image: {
    width: 150,
    height: 240,
    marginBottom: 10,
    marginRight: 10
  },
  episodeInfo: {
  },
  detail:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch',
    width:'100%'
  }
});

export default ShowDetail;

