import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlobalStyles, { vs, hs, ms } from '../../Style';

function Current({data}) {
  return (
    <View style={[styles.container, GlobalStyles.center]}>
      <Image source={{ uri: `https:${data.current.condition.icon}` }} resizeMode='cover' style={styles.img} />
      <Text variant='headlineLarge' theme={{ colors: { onSurface: '#000000' } }}>{`${data.current.temp_c}`}<MaterialCommunityIcons name="temperature-celsius" size={ms(24)} color="black" /></Text>
      <Text variant='titleMedium' theme={{ colors: { onSurface: '#000000' } }}>{`${data.current.condition.text}`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { height: '30%', marginTop: '5%' },
  img: { height: vs(100), width: hs(100) }
});
export default Current