import React from 'react';
import styles from './MenyElement.module.css'; // 📌 Importerer CSS-modulen

function MenuItem({ name, description, price, allergens, image }) {
  return (
    <div className={styles.menuItem}> {/* 📌 Bruker className fra CSS-modulen */}
      <img src={image} alt={name} className={styles.menuImage} />
      <div className={styles.menuInfo}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>Price:</strong> {price} NOK</p>
        {allergens.length > 0 && (
          <p><strong>Allergens:</strong> {allergens.join(", ")}</p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;

