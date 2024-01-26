import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlobalStyles, { vs, hs, ms } from '../../Style';

function Card({ backgroundColor ="rgb(255, 217, 221)", children }) {
  return (
    <View style={[GlobalStyles.center, styles.container, { backgroundColor: backgroundColor }]}>
     {children}
    </View>
  )
}
const styles = StyleSheet.create({
  container: { aspectRatio: 1, height: vs(80),borderRadius: ms(10) },
});

export default Card