import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import GlobalStyles, { vs, hs, ms } from '../../Style';
function Location({ data }) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text variant='titleLarge' style={{ textAlign: 'center' }} theme={{ colors: { onSurface: '#000000' } }}>{`${data.location.name}, ${data.location.region}, ${data.location.country} `}</Text>
      </View>
      <Text variant='labelMedium' style={{ alignSelf: 'center' }} theme={{ colors: { onSurface: '#000000' } }}>{`${data.location.localtime}`}</Text>
    </React.Fragment>
  )
}
const styles = StyleSheet.create({
  container: { width: hs(250), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' ,},
});
export default Location;