import { Button, Image, Text, View } from 'react-native';

import { Card } from '../../components';
import React from 'react';
import { styles } from './styles';

const GameOver = ({ onRestart, rounds, choice }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/game-over.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Card style={styles.card}>
        <Text style={styles.title}>Intentos: {rounds}</Text>
        <Text style={styles.title}>El numero era: {choice}</Text>
      </Card>
      <Button title="Nuevo juego" onPress={onRestart} />
    </View>
  );
};

export default GameOver;