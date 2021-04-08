import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from "react-native";
import Footer from '../components/templates/Footer';
import ShowDetail from '../components/templates/ShowDetail';


const Detail = (props) => {

  return (
    <View style={styles.container}>
      <ShowDetail style={styles.detail}></ShowDetail>
      <Footer style={styles.Footer}></Footer>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1
  }, 
  detail:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  footer:{
    backgroundColor:'gray',
    height:30
  }
});

export default Detail;

