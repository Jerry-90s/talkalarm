import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigation';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <RootNavigator/>
        </GestureHandlerRootView>
    );
}
