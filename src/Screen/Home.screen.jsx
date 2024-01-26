import React from 'react';
import { View, Image, Keyboard } from 'react-native';
import { Text, Searchbar, TouchableRipple, ActivityIndicator, MD2Colors, Snackbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import GlobalStyles, { vs, hs, ms } from '../../Style';
import styles from './home.style'
import { useLazyWeatherApiQuery } from '../../Redux-Store/services/weatherapi';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Location from '../Components/Location.component';
import Current from '../Components/Current.component';
import Card from '../Components/Card.component';

async function setStoreage(data) {
  AsyncStorage.getItem('weather')
    .then((value) => {
      if (value !== null ) {
        var arr = value !== null ? JSON.parse(value) : []
        var i = arr.findIndex((x) =>  x.location.name === data.location.name) ;
        if ( i !== -1 ) {
          arr[i] = data;
        }else{
          arr.push(data);
        }
        AsyncStorage.setItem('weather', JSON.stringify(arr));
      }else{
        var arr = []
        arr.push(data);
        console.log('arr ',arr)
        AsyncStorage.setItem('weather', JSON.stringify(arr));
      }
    })
}
function Home({ navigation,route }) {
  const [location, setLocation] = React.useState('gandhinagar');
  const [weatherApi,{ isLoading, isSuccess, isError, isFetching, error, data }] = useLazyWeatherApiQuery();
  const searchQuery = React.useRef('');
  const searchRef = React.useRef('');
  const [visible, setVisible] = React.useState(false);
  React.useMemo(() => { setVisible(isError) }, [isError,])
  React.useMemo(() => {
    if (isSuccess) {
      setStoreage(data);
    }
  }, [isLoading, isFetching])
  React.useMemo(()=>{
    if (route?.params?.name) {
      weatherApi(route?.params?.name)
    }
  }, [route?.params?.name])
  React.useEffect(() => {
    weatherApi('gandhinagar')
  }, [])
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  function onSearch() {
    Keyboard.dismiss(); 
    weatherApi(searchQuery.current); 
    searchRef?.current?.clear();
  }
  return (
    <View style={GlobalStyles.container}>

      <View style={{ flexDirection: 'row', alignContent: 'center' }}>
        <Searchbar
          ref={searchRef}
          placeholder="Search"
          onChangeText={(value) => { searchQuery.current = value; console.log('searchRef ', searchRef)}}
          onIconPress={onSearch}
          clearIcon={(props) => <Feather name="delete" size={24} color="black" onPress={()=>{console.log('first')}}/>}
          onClearIconPress={(e)=>{searchRef?.current?.clear();}}
          clearAccessibilityLabel="clear"
          style={{ flex: 1 }}
        />
        <View style={[GlobalStyles.center, { marginLeft: '2%' }]}>
          <TouchableRipple onPress={() => { navigation.navigate('History') }}>
            <MaterialIcons name="history" style={{ alignSelf: 'flex-end' }} size={ms(24)} color="black" />
          </TouchableRipple>
        </View>
      </View>
      {
        !isLoading && data?.current ?
          (<View style={{ flex: 1, alignItems: 'center', paddingTop: '5%' }}>
            <Location data={data} />
            <Current data={data} />
            <View style={styles.subcontainer}>
              <Card>
                <MaterialCommunityIcons name="weather-windy" size={ms(40)} color="black" />
                <Text variant='titleMedium' theme={{colors:{onSurface:'#000000'}}}>{`${data.current.wind_kph} Km`}</Text>
              </Card>
              <Card>
                <MaterialIcons name="water-drop" size={ms(40)} color="black" />
                <Text variant='titleMedium' theme={{ colors: { onSurface: '#000000' } }}>{`${data.current.humidity} %`}</Text>
              </Card>
            </View>
          </View>)
          :
          (<View style={GlobalStyles.container}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
            </View>
            )
      }
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        {`${error?.data?.error?.message}`}
      </Snackbar>
    </View>
  )
}

export default Home;