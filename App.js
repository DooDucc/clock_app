import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopTabNavigation from './src/topTabNavigation/TopTabNavigation';
import { StatusBar } from 'react-native';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1, paddingHorizontal: 25 }}>
            <SafeAreaProvider>
                <StatusBar />
                <TopTabNavigation />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
