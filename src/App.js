import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './navigation/Main';
import {QueryClient, QueryClientProvider} from 'react-query';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';

const queryClient = new QueryClient();

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
