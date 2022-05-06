import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutUs from '../screens/AboutUs';
import ChangeNumber from '../screens/ChangeNumber';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const DrawerSection = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopColor: 'gray',
        marginVertical: -8,
      }}>
      <Text style={{color: title === 'LOGOUT' ? 'red' : 'gray', fontSize: 12}}>
        {title}
      </Text>
    </View>
  );
};
const DrawerNavigation = () => {
  return (
    <DrawerContentScrollView
      style={{
        fontSize: 10,
        marginTop: Platform.OS === 'ios' ? -50 : 0,
        height: '100%',
      }}
      {...props}>
      <DrawerItemList
        style={{backgroundColor: 'red', fontSize: 10}}
        {...props}
      />
      <DrawerItem
        label={({focused, color}) => (
          <DrawerSection
          // focused={focused}
          // color={color}
          // icon="heart-outline"
          // title="About NISCN"
          />
        )}
        onPress={() => props.navigation.navigate('Favourites')}
      />
      <DrawerItem
        label={({focused, color}) => (
          <DrawerSection
            focused={focused}
            color={color}
            icon="clipboard-list-outline"
            title="Report Safety Issue"
          />
        )}
        onPress={() => props.navigation.navigate('Orders')}
      />
    </DrawerContentScrollView>
    // <Drawer.Navigator>
    //   <Drawer.Screen name="AboutUs" component={AboutUs} />
    //   <Drawer.Screen name="ChangeNo" component={ChangeNumber} />
    // </Drawer.Navigator>
  );
};
export default DrawerNavigation;
