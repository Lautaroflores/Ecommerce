import {query, orderBy, where, collection, getDocs} from '@firebase/firestore';
import { isValidTimestamp } from '@firebase/util';
import {doc, getDoc} from 'firebase/firestore';
import db from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query (collection(db, "guitars"), where ('categoryId', '==', idCategory));
    } else {
        q = query(collection(db, "guitars"));
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));

    return dataFromFirestore;
}

const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "guitars", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("there's no item");
    }
}

export default firestoreFetchOne;
