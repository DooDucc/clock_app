import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopTabNavigation from './src/topTabNavigation/TopTabNavigation';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1, paddingHorizontal: 25 }}>
            <Provider store={store}>
                <SafeAreaProvider>
                    <StatusBar />
                    <TopTabNavigation />
                </SafeAreaProvider>
            </Provider>
        </GestureHandlerRootView>
    );
}
