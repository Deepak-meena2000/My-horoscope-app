import React ,{Fragment} from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './navigation/Main';
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

const App = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <QueryClientProvider client={queryClient}>
                <Main/>
                </QueryClientProvider>
            </NavigationContainer>
        </Fragment>
    );
}

export default App ;