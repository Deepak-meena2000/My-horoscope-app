import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Zodiac from '../screens/Zodiac';
import Horoscope from '../screens/Horoscope';
const Stack = createStackNavigator();



const Main  = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen name="Zodiac" component={Zodiac}/>
                <Stack.Screen name="Horoscope" component={Horoscope}/>
        </Stack.Navigator>
    );

      
}

export default Main;