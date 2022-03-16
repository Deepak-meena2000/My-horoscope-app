import React, {Fragment} from 'react';
import {FlatList, TouchableOpacity, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import Text from '../themes/Text';

import {useTailwind} from 'tailwind-rn';

const Zodiac = ({navigation}) => {
  const tailwind = useTailwind();

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
    <View style={tailwind('bg-stone-700	h-full')}>
      <View
        style={tailwind('flex-1 justify-center items-center px-5 py-2 m-3')}>
        <Text
          style={tailwind(
            'text-center pt-20 text-xl bg-blue-200 w-80 px-5 py-2 rounded-full font-semibold ',
          )}>
          Zodiac Signs
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push('Horoscope', {zodiacSign: item.sign})
            }>
            <View style={tailwind('px-3 py-2')}>
              <Text
                style={tailwind(
                  'text-center bg-emerald-500  rounded-full w-40',
                )}>
                {item.sign}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Zodiac;
