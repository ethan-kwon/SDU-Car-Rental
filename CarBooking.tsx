import Car from "../models/Car";
import {useState, useEffect} from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import {
    FlatList,
    Modal,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
} from 'react-native';


//TESTING CAR LIST
    type ItemData ={
        id: string;
        title: string;
    };

      const DATA: ItemData[] = [
        {
            id: '1',
            manufacturer: 'Volvo',
            model: 'Spectre',
            productionYear: '1994',
            licenseNumber: 'ABC5154354',
            color: 'Red',
            pricePerDay: '500 kr',
        },
        {
            id: '2',
            manufacturer: 'Fiat',
            model: 'Panda',
            productionYear: '1995',
            licenseNumber: 'ABC2768751',
            color: 'Blue',
            pricePerDay: '1500 kr',
        },
        {
            id: '3',
            manufacturer: 'Toyota',
            model: 'Yaris',
            productionYear: '1994',
            licenseNumber: 'ABC5154354',
            color: 'Red',
            pricePerDay: '800 kr',
        },
    ];

    type ItemProps = {
        item: ItemData;
        onPress: () => void;
        backgroundColor: string;
    };
  /* DATE-TIME-PICKER code segment.
   const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), "YYYY/MM/DD")

    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(2023/10/29)

    function handleOnPress () {
        setOpen(!open);
    }

    function handleChange (propDate) {
        console.log(propDate)
        setDate(propDate)
    }
    */
    const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.manufacturer, {color: textColor}]}>{item.manufacturer + '; ' +item.model + '; ' + item.color + ': ' + item.pricePerDay}</Text>
      </TouchableOpacity>
    );
    const carBookingScreen = () => {
        const [selectedId, setSelectedId] = useState<string>();


            const renderItem = ({item}: {item: ItemData}) => {
                const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
                const color = item.id === selectedId ? 'white' : 'black';

            return (
                <Item
                    item={item}
                    onPress={() => setSelectedId(item.id)}
                    backgroundColor={backgroundColor}
                    textColor={color}
                />

            );
        };
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
                   <Button title="Date of booking" />
            </SafeAreaView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            MarginTop: StatusBar.currentHeight || 0,
            padding: 50,
        },
        dateTime: {
            padding: 15,
        },
        item: {
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        manufacturer: {
            fontSize: 20,
            marginVertical: 20,
        },

    });

export default carBookingScreen;
