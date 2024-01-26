import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, List, TouchableRipple, ActivityIndicator, MD3Colors, Snackbar, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlobalStyles, { vs, hs, ms } from '../../Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Accordion from '../Components/Accordion.component';
function History({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);
  const [data, setData] = React.useState([]);
  React.useEffect(()=>{
    AsyncStorage.getItem('weather')
   .then((value) => {
        if (value!== null) {
         setData(value!== null? JSON.parse(value) : [])
        }
      })
  },[])
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={GlobalStyles.container}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <IconButton
        icon="arrow-left"
        iconColor={'#000000'}
        size={ms(30)}
        onPress={() => navigation.goBack()}
      />
        <Text variant='titleLarge'>History</Text>
      </View>
      <ScrollView>
        {
          data?.map((item, index) => {
            return (
              <Accordion key={index} item={item}/>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default History;