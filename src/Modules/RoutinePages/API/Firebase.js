import database from '@react-native-firebase/database';
import {getCurrentUser} from '../../Auth';
import { convertRawData } from './Converter';

export const subscribeToItemData = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/itemThumbnailList/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertRawData(rawData);
            onDataRetrieved(convertedList);
        });

    return () => {
        database()
            .ref(`/itemThumbnailList/${userId}`)
            .off('value');
    }
}

export const subscribeToItemDataDetails = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/itemList/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertRawData(rawData);
            onDataRetrieved(convertedList);
        });

    return () => {
        database()
            .ref(`/itemList/${userId}`)
            .off('value');
    }
}


export const addItem = async(item, onComplete) => {
    try{
        const itemThumbnail = {
            title: item.title
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
export const updateItem = async (item, onComplete) => {
    try {
        await database()
            .ref(`/itemList/${item.key}`)
            .update(item);

        /// **** Aşağıdaki alanı uygulamanıza göre değiştirin **** ///
        const itemThumbnail = {
            title: item.title,
           
        }
        /// **** Yukarıdaki alanı uygulamanıza göre değiştirin **** ///
        
        const userId = getCurrentUser().uid;
        await database()
            .ref(`/itemThumbnailList/${userId}/${item.key}`)
            .update(itemThumbnail);

        onComplete();
    } catch (error) {
        console.log(error);
    }
}
export const getItemDetail = (itemKey, onRetrieved) => {
    database()
        .ref(`/itemList/${itemKey}`)
        .once('value')
        .then(snapshot => {
            onRetrieved(snapshot.val())
        })
}


export const deleteItem = itemKey => {
    const userId = getCurrentUser().uid;
    database()
        .ref(`/itemThumbnailList/${userId}/${itemKey}`)
        .remove();

    database()
        .ref(`/itemList/${itemKey}`)
        .remove();
}