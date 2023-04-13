import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginAndSignup/Login';
import SignupScreen from '../screens/loginAndSignup/Signup';
import TabNavigation from './TabNavigation';


const Stack = createStackNavigator();
const StackNaviagtion=()=>{
    const options={ headerShown: false };

    return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen}   options={options}/>
          <Stack.Screen name="Signup" component={SignupScreen}  options={options} />
          <Stack.Screen name="TabNavigation" component={TabNavigation}  options={options} />
        </Stack.Navigator>
      );
};

export default StackNaviagtion