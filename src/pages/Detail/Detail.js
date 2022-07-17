import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import stlyes from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';

const Detail = ({route}) => {
  const {id} = route.params;

  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={stlyes.title}>{data.title}</Text>
        <Text style={stlyes.desc}>{data.description}</Text>
        <Text style={stlyes.price}>{data.price} $</Text>
      </View>
    </View>
  );
};

export default Detail;
