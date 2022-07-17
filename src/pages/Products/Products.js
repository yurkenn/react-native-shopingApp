import {FlatList} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  const {loading, error, data} = useFetch(Config.API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
