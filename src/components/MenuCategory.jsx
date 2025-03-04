// 📌 Importerer React for å kunne lage en komponent
import React from 'react';

// 📌 Importerer CSS-modulen spesifikt for denne komponenten
import styles from '../assets/MenuCategory.module.css';

// 📌 Importerer MenuItem-komponenten, som representerer individuelle retter
import MenuItem from './MenuItem';

// 📌 Funksjonell komponent som representerer en meny-kategori (f.eks. "Forretter", "Hovedretter", "Desserter")
function MenuCategory({ title, items }) {
  return (
    <div className={styles.menuCategory}> {/* 📌 Bruker styling fra CSS-modulen */}
      
      {/* 📌 Viser tittelen på kategorien, f.eks. "Starters", "Main Courses" eller "Desserts" */}
      <h2 className={styles.categoryTitle}>{title}</h2>

      {/* 📌 Mapper gjennom items-arrayet og lager et <MenuItem>-element for hver rett */}
      {items.map((item, index) => (
        <MenuItem
          key={index} // 📌 Gir hver komponent en unik nøkkel for optimal rendering i React
          name={item.name} // 📌 Sender navn på retten
          description={item.description} // 📌 Sender beskrivelsen av retten
          price={item.price} // 📌 Sender prisen på retten
          allergens={item.allergens} // 📌 Sender liste over allergener
          image={item.image} // 📌 Sender bilde av retten
        />
      ))}
    </div>
  );
}

// 📌 Eksporterer komponenten slik at den kan brukes i App.jsx
export default MenuCategory;

