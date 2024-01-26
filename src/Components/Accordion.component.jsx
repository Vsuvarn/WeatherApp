import React from 'react';
import {Image,View} from 'react-native';
import { List, ActivityIndicator, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import GlobalStyles, { vs, hs, ms } from '../../Style';
import { useWeatherApiQuery } from '../../Redux-Store/services/weatherapi';
import Current from '../Components/Current.component';
import { useNavigation } from '@react-navigation/native';
function Accordion({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate('Home',{
    name: item.location.name
  });
  return (
    <List.Item
      title={`${item.location.name}, ${item.location.region}, ${item.location.country}`}
      description={`${item.location.localtime}`}
      left={props => <MaterialIcons name="location-on" size={24} color="rgb(120, 69, 172)" style={{marginTop:'2%'}} />}
    
      onPress={handlePress}>
     
    </List.Item>
  )
}

export default Accordion