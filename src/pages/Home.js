import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Footer from '../components/templates/Footer';
import ShowsList from '../components/templates/ShowsList';


const Home = (props) => {

  return (
    
    <View style={styles.container}>
      <ShowsList style={styles.list} props={props}></ShowsList>
      <Footer style={styles.Footer}></Footer>
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1
  }, 
  list:{
    flex: 1
  },
  footer:{
    height:30
  }
});


export default Home;
