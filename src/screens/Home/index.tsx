import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { styles } from './styles';
import { SignInBox } from '../../components/SignInBox';


 export function Home() {
    return (
        <View style={styles.container}>  
            <Header />
            <MessageList />
            <SignInBox />
        </View>
    );
}