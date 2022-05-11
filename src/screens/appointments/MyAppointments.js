import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SwitchButton from '../../components/appointmentComponents/SwitchButton';
import MyAppointmentCard from '../../components/appointmentComponents/MyAppointmentCard';
import HeaderComponent from '../../components/headerComponent';

const MyAppointments = (props) => {
  const [upComming, setUpComming] = useState(true);
  const [archive, setArchive] = useState(false);
  const data = [
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
    {title: 'Abroad Studies', date: '2 April 2022', time: '10:30'},
  ];
  const fetchUpcomming = () => {
    setUpComming(true);
    setArchive(false);
  };
  const fetchArchive = () => {
    setUpComming(false);
    setArchive(true);
  };
  const separator = () => {
    return <View style={{height: hp('2%')}} />;
  };
  const renderItem = ({item}) => {
    return (
      <MyAppointmentCard title={item.title} date={item.date} time={item.time} />
    );
  };
  return (
    <View style={{backgroundColor: 'white'}}>
    <HeaderComponent Drawer={true} title={"My Appointment"} navigation={props.navigation}/>
      <SwitchButton
        defaultSelected={upComming}
        swicthSelected={archive}
        toggleSwitch={() => fetchUpcomming()}
        switchToggle={() => fetchArchive()}
        defaultSelectedText={'Up Comming'}
        swicthSelectedText={'Archive'}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        key={index => index}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};

export default MyAppointments;
