import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Index from './Index';
import Login from './Login';
import Register from './Register';
import LoginOTP from './LoginOTP';
import ForgotPass from './ForgotPass';
import PersonalDetails from './PersonalDetails';
import CarDetails from './CarDetails';
import PaymentDetails from './PaymentDetails';
import UserHome from './Home';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Profile from './Profile/Profile';
import MyCar from './Profile/MyCar';
import WynkPass from './Profile/WynkPass';
import CompletedJobs from './Jobs/CompletedJobs';
import UpcomingJobs from './Jobs/UpcomingJobs';
import JobHeader from './Jobs/JobHeader';
import RideDetail from './Jobs/RideDetail';
import RideIndex from './RideRequest/RideIndex';
import RideStatus from './RideRequest/RideStatus';
import Summary from './RideRequest/Summary';
import Call from './RideRequest/Call';
import Message from './RideRequest/Message';
import PaymentMethod from './Profile/PaymentMethod';


const Stack = createStackNavigator();

const modalOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.1, 0.3, 0.7]
      })
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
        extrapolate: "clamp"
      })
    }
  })
};


const LoginStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={
        { header: () => null }
      }
    >
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="LoginOTP" component={LoginOTP} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();


const ProfileStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name="ProfileIndex" component={Profile} />
      <Stack.Screen name="MyCar" component={MyCar} />
      <Stack.Screen name="WynkPass" component={WynkPass} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    </Stack.Navigator>
  )
}

const JobStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name='JobHeader' component={JobHeader} />
      <Stack.Screen name='RideDetail' component={RideDetail} />
      {/* <Stack.Screen name='CompletedJobs' component={CompletedJobs} />
      <Stack.Screen name='UpcomingJobs' component={UpcomingJobs} /> */}
    </Stack.Navigator>
  )
}

const RideStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      >
      <Stack.Screen name='UserHome' component={UserHome} />
      <Stack.Screen name='RideIndex' component={RideIndex} />
      <Stack.Screen name='RideStatus' component={RideStatus} />
      <Stack.Screen name='Summary' component={Summary} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name='Call' component={Call} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name='Message' component={Message} options={{ presentation: 'transparentModal' }} />
    </Stack.Navigator>
  )
}

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'compass';
            size = focused ? 27 : 23;
            // color = focused ? '#211E8A' : '#000'
          } else if (route.name === 'Jobs') {
            iconName = 'list-ul';
            size = focused ? 25 : 20;
            // color = focused ? '#211E8A' : '#000'
          } else if (route.name === 'Dashboard') {
            iconName = 'chart-pie';
            size = focused ? 25 : 20;
          } else if (route.name === 'Wallet') {
            iconName = 'wallet';
            size = focused ? 25 : 20;
          } else if (route.name === 'Profile') {
            iconName = 'user';
            size = focused ? 25 : 20;
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}
            />
          )
        },
        header: () => { null },
        tabBarActiveTintColor: '#211E8A',
        // tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 14,
        }
      })}
    >
      <Tab.Screen name="Home" component={RideStackScreen} />
      <Tab.Screen name="Jobs" component={JobStackScreen} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}




const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          { header: () => null }
        }
      >
        <Stack.Screen name="LoginStackScreen" component={LoginStackScreen} />
        <Stack.Screen options={{ headerShown: false }} name="HomeTabScreen" component={HomeTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
