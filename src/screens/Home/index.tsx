import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { styles } from './styles';
import { SignInBox } from '../../components/SignInBox';
import { SendMessageForm } from '../../components/SendMessageForm';


 export function Home() {
    return (
        <View style={styles.container}>  
            <Header />
            <MessageList />
            <SendMessageForm />
        </View>
    );
}