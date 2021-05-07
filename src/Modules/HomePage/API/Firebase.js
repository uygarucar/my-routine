import database from '@react-native-firebase/database';
import {getCurrentUser} from '../../Auth';
import DummyData from '../Components/DummyData'

export const addItem = async(item, onComplete) => {
    try{
        const itemThumbnail = {
            title: item.routineName
        };

        const userId = getCurrentUser().uid;

        //Sade objeyi itmek için user'un id'sinin altından bir referans alalım
        const newItemTHumbnailRef = database()
        .ref(`/itemThumbnailList/${userId}`)
        .push();

        //Bu referansın değerini sade objemiz yapalım
        await newItemTHumbnailRef.set(itemThumbnail);

        //Bir önceki adımda firebase'in bize verdiği key'i alalım
        const itemKey = newItemTHumbnailRef.key;

        //Bu key ile database'e item'in detayını ekleyelim.

        await database()
            .ref(`/itemList/${itemKey}`)
            .set(item);

        onComplete();
    } 
    catch(error){

    }
}