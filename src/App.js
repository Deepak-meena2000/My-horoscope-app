import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './navigation/Main';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = props => {
  console.log(props.web, 'welcome to app from index.web.js');
  return (
    <Fragment>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Main isweb={props.web} />
        </QueryClientProvider>
      </NavigationContainer>
    </Fragment>
  );
};

export default App;
