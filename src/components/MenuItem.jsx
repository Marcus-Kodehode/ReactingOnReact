// 📌 Importerer CSS-modulen for å style denne komponenten
import styles from '../assets/MenuItem.module.css';

// 📌 Funksjonell komponent som representerer et enkelt menyelement
function MenuItem({ name, description, price, allergens, image }) {
  return (
    <div className={styles.menuItem}> {/* 📌 Bruker className fra CSS-modulen for å style hele menyelementet */}
      
      {/* 📌 Viser bildet av retten, henter src fra props og bruker styling fra CSS-modulen */}
      <img src={image} alt={name} className={styles.menuImage} />

      {/* 📌 Wrapper for all informasjon om retten */}
      <div className={styles.menuInfo}>
        
        {/* 📌 Viser navnet på retten */}
        <h2>{name}</h2>

        {/* 📌 Viser beskrivelsen av retten */}
        <p>{description}</p>

        {/* 📌 Viser prisen på retten i NOK */}
        <p><strong>Price:</strong> {price} NOK</p>

        {/* 📌 Sjekker om retten har allergener før den viser dem */}
        {allergens.length > 0 && (
          <p><strong>Allergens:</strong> {allergens.join(", ")}</p> 
          // 📌 Bruker .join(", ") for å vise allergenene som en kommaseparert liste
        )}
      </div>
    </div>
  );
}

// 📌 Eksporterer komponenten slik at den kan brukes i andre filer
export default MenuItem;


