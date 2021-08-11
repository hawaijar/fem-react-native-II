import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const ColorComponent = ({color, code, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View
        style={[
          styles.header,
          {
            backgroundColor: code,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          },
        ]}>
        <Text
          style={styles.ColorTextComponentStyle}>{`${color}: ${code}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Color = ({navigation}) => {
  const data = [
    {
      color: 'Cyan',
      code: '#2aa198',
    },
    {
      color: 'Blue',
      code: '#268bd2',
    },
    {
      color: 'Magenta',
      code: '#d33682',
    },
    {
      color: 'Orange',
      code: '#cb4b16',
    },
  ];
  const renderItem = row => {
    const {item} = row;
    const {color, code} = item;
    return <ColorComponent color={color} code={code} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={[styles.header, {marginTop: 30, marginBottom: 10}]}>
          Here are some boxes of different colours
        </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.code}
        />
      </View>
    </SafeAreaView>
  );
};

export default Color;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    fontSize: 30,
    color: 'rebeccapurple',
  },
  ColorTextComponentStyle: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
