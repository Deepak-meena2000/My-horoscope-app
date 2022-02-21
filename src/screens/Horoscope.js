import React, {Fragment} from 'react';
import colors from '../constants/colors';
import { View ,StyleSheet, ScrollView} from 'react-native';
import Text from '../themes/Text';
import { useQuery } from 'react-query';
import axios from 'axios';
import useHoroscope from '../hooks/useHoroscope';


const fetchHoroscope = async (sign) => {
    const {data} = await axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=Today`)
    return data ;
}

const Horoscope =  (zodiacSign) => {

    const sign= zodiacSign.route.params.zodiacSign;

    const  {data , isSuccess,isLoading} = useQuery(['horoscope', sign] ,() => fetchHoroscope(sign));

    
    console.log(sign)
    console.log(data , isLoading , isSuccess)
    return (
       
        <ScrollView style={styles.conatiner}>
            <Text style={styles.header}>{sign}</Text>

            {isLoading && <Text style={{textAlign : 'center'}}>Loading.....</Text>}

            {isSuccess && (
                <Fragment>
                    <Text style={styles.item}>Description{data.description}</Text>
                    <Text style={styles.item}>Mood : {data.mood}</Text>
                    <Text style={styles.item}>Current Date : {data.current_date}</Text>
                    <Text style={styles.item}>Date Range: {data.date_range}</Text>
                    <Text style={styles.item}>Color : {data.color}</Text>
                    <Text style={styles.item}>Compatibility :{data.compatibility}</Text>
                    <Text style={styles.item}>Lucky Number : {data.lucky_number}</Text>
                    <Text style={styles.item}>Lucky Time : {data.lucky_time}</Text>

                </Fragment>
            )}

        </ScrollView>
    )
}

export default Horoscope;

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: colors.white,
		padding: 30
	},
	header: {
		textAlign: 'center',
		textTransform: 'capitalize',
		fontWeight: 'bold',
		fontSize: 40,
		color: colors.primary,
		paddingVertical: 10
	},
	commentHeader: {
		
		textTransform: 'capitalize',
		
		fontSize:10,
		color: colors.primary,
		paddingVertical: 30
	},
	post: {
		flex: 1,
		paddingVertical: 10,
		alignItems: 'center'
	},
    item:{
        flex: 1,
		backgroundColor: colors.white,
		
        marginTop:10
    }
   });