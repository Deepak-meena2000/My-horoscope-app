import React, {Fragment} from 'react';
import {FlatList, TouchableOpacity, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import Text from '../themes/Text';

const Zodiac = ({navigation}) => {
  const data = [
    {
      id: '1',
      sign: 'Aries',
    },
    {
      id: '2',
      sign: 'Taurus',
    },
    {
      id: '3',
      sign: 'Gemini',
    },
    {
      id: '4',
      sign: 'Cancer',
    },
    {
      id: '5',
      sign: 'Leo',
    },
    {
      id: '6',
      sign: 'Virgo',
    },
    {
      id: '7',
      sign: 'Libra',
    },
    {
      id: '8',
      sign: 'Scorpio',
    },
    {
      id: '9',
      sign: 'Sagittarius',
    },
    {
      id: '10',
      sign: 'Aquarius',
    },
    {
      id: '11',
      sign: 'Pisces',
    },
  ];

  return (
    <Fragment>
      <Text style={styles.header}>Zodiac Signs</Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push('Horoscope', {zodiacSign: item.sign})
            }>
            <View>
              <Text style={styles.list}>{item.sign}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Fragment>
  );
};

export default Zodiac;

``;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  list: {
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 20,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.primary,
    paddingVertical: 20,
  },
  post: {
    backgroundColor: '#34cceb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '50%',
  },
  postTitle: {color: colors.white, textTransform: 'capitalize'},
});
