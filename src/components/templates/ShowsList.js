import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableHighlight } from 'react-native';
import { SearchBar } from "react-native-elements";
import Card from './../organisms/Card';
import { fetchSearch, fetchShows } from './../../utils/api';
import { useSelector, useDispatch } from 'react-redux';

import { currentlist, increment, refreshList, currentSearch, searchShow } from '../../reducers/showsSlice';
import { useNavigation } from '@react-navigation/core';


const ShowsList = (props) => {

  const navigation = useNavigation();
  const search = useSelector(currentSearch);
  const list = useSelector(currentlist);


  //const [entries, setEntries] = useState([]); 
  //const [searchKey, setSeachKey] = useState('');

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //first
    onRefresh();
  }, []);
  
  const filterShowsList = (data) => {
    return [...data].filter((el) => { return (el.show?.image); });
  }

  async function onRefresh() {
    setLoading(true);
    const data = await fetchShows();
    dispatch(refreshList(filterShowsList(data)));
    setLoading(false);
  }

  const onShowPress = (item) => {
    navigation.navigate('Detail', { show: item });
  }

  async function updateSearch(key) {

    dispatch(searchShow(key));
    //setSeachKey(key);

    if(key.length == 0){
      onRefresh()
    }else{

      setLoading(true);
      const data = await fetchSearch(key);
      dispatch(refreshList(filterShowsList(data)));
      setLoading(false);
  
    }


  };
  return (

    <View style={{...props.style, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 10,
        flex: 1
      }
    }>

      <SearchBar
        platform="default"
        containerStyle={{
          borderTopColor: '#ffffff',
          borderBottomColor: '#ffffff',
          borderRadius: 30,
          margin: 0,
          padding: 0,
          width:'100%'
        }}
        inputContainerStyle={{
          borderTopColor: '#ffffff',
          borderBottomColor: '#ffffff',
          borderRadius: 30,
          padding: 0,
          backgroundColor: '#3C94',
          justifyContent: 'space-between'
        }}
        searchIcon={{
          color: '#FFFFFF',
          marginLeft: 10
        }}
        inputStyle={{
          borderRadius: 30,
          backgroundColor: '#ffffff',
          paddingLeft: 10,
          paddingRight: 10,
          color: '#000'
        }}
        clearIcon={{
          iconStyle: { margin: 10 },
          containerStyle: { margin: -10 },
          containerStyle: { marginRight: -8 },
          color: '#FFF'
        }}
        value={search}
        onChangeText={updateSearch}
        onCancel={onRefresh}
        onClear={onRefresh}
      />


      <FlatList
        style={styles.list}
        refreshing={loading}
        data={list}
        onRefresh={onRefresh}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            style={styles.card}
            key={item.id}
            onPress={() => onShowPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <Card item={item} />
          </TouchableHighlight>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        animated={true}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 10,
    width: '50%'
  }
});

export default ShowsList;
