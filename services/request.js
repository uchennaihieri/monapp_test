import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from './firebase';



 export const getWallet = async (setWallet,person) => {
    try {
        const walletQuery = query(
            collection(db, "wallet"),
            where("user", "==", person.userID),
            orderBy("createdAt", "desc"),
            limit(1)
        );
        const unsubscribe =  onSnapshot(walletQuery, (querySnapshot) => {
            const myWallet = [];
            querySnapshot.forEach((doc) => {
                myWallet.push({ id: doc.id, ...doc.data() });
            });


            setWallet(myWallet[0]);
        });
    } catch (error) {
        console.error('wallet',error);
    }
    }

    

export const getCard = async (setCard,person) => {
    try {
        const cardQuery = query(
            collection(db, "cards"),
            where("user", "==", person.userID),
            orderBy("createdAt", "desc"),
            limit(1)
        );

        const unsubscribe =  onSnapshot(cardQuery, (querySnapshot) => {
            const myCard = [];
            querySnapshot.forEach((doc) => {
                myCard.push({ id: doc.id, ...doc.data() });
            });


            setCard(myCard[0]);
        });}
        catch (error) {
            console.error('card',error);
        }

    }


export const getTransactions = async (setTransactions,person,lim) => {
    try {
        const transactionsQuery = query(
            collection(db, "transactions"),
            where("users", 'array-contains', person.userID),
            // orderBy( 'createdAt', 'ascend'),
            limit(lim)
        );

        const unsubscribe =  onSnapshot(transactionsQuery, (querySnapshot) => {
            const myTransactions = [];
            querySnapshot.forEach((doc) => {
                myTransactions.push({ id: doc.id, ...doc.data() });
            });

            setTransactions(myTransactions);
        });
        return unsubscribe;
    } 
    catch (error) {
        console.error('transactions',error);

    }
}
