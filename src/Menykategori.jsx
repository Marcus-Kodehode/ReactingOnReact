import React from 'react';
import MenuItem from './MenyElement';
import styles from './Menykategori.module.css'; // 📌 Importerer CSS-modulen

function MenuCategory({ title, items }) {
  return (
    <div className={styles.menuCategory}> {/* 📌 Bruker styling fra CSS-modulen */}
      <h2>{title}</h2>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          allergens={item.allergens}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default MenuCategory;
