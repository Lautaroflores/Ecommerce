import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "./firebaseConfig";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoryId } = useParams();

  
  useEffect(() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "guitars"));
    
      const result = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      const filter = result.filter((document) => {
        if (categoryId) {
          if (categoryId == document.categoryId) {
            return document
          }
        } else {
          return document;
        }
      });
    
      setDatos(filter);
    };
    firestoreFetch();
  }, [categoryId]);

  return (
    <div className="p-3 mb-2 bg-dark text-white">
      <ItemList items={datos} />
    </div>
  );
};

export default ItemListContainer;
