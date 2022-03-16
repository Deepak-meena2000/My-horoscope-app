import React, {Fragment} from 'react';
import colors from '../constants/colors';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../themes/Text';
import {useQuery} from 'react-query';
import axios from 'axios';
import {useTailwind} from 'tailwind-rn';

const fetchHoroscope = async sign => {
  const {data} = await axios.post(
    `https://aztro.sameerkumar.website?sign=${sign}&day=Today`,
  );
  return data;
};

const Horoscope = zodiacSign => {
  const tailwind = useTailwind();

  const sign = zodiacSign.route.params.zodiacSign;

  const {data, isSuccess, isLoading} = useQuery(['horoscope', sign], () =>
    fetchHoroscope(sign),
  );

  return (
    <ScrollView style={tailwind('bg-stone-700 h-full')}>
      <View style={tailwind('flex-1 justify-center items-center px-5 py-5')}>
        <Text
          style={tailwind(
            ' text-rose-600 text-center capitalize  text-4xl  pt-20 bg-blue-200 w-80 px-5 py-4 rounded-full',
          )}>
          {sign}
        </Text>
      </View>

      {isLoading && (
        <Text style={tailwind('text-center text-neutral-50 py-4 text-2xl')}>
          Loading.....
        </Text>
      )}

      {isSuccess && (
        <View style={tailwind('flex-1 justify-center items-center px-5 py-4')}>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Description : {data.description}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Mood : {data.mood}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Current Date : {data.current_date}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Date Range: {data.date_range}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Color : {data.color}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Compatibility :{data.compatibility}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Lucky Number : {data.lucky_number}
          </Text>
          <Text style={tailwind('text-neutral-50 py-4')}>
            Lucky Time : {data.lucky_time}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Horoscope;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 30,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 40,
    color: colors.primary,
    paddingVertical: 10,
  },
  commentHeader: {
    textTransform: 'capitalize',

    fontSize: 10,
    color: colors.primary,
    paddingVertical: 30,
  },
  post: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 20,

    marginTop: 10,
    marginBottom: 20,
  },
});
