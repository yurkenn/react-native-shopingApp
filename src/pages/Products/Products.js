import {View, FlatList, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(Config.API_URL);
    setData(productData);
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
