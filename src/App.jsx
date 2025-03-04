import React from 'react';
import MenuCategory from './Menykategori';
import styles from './App.module.css'; // 📌 Importerer CSS-modulen for denne komponenten

function App() {
  const starters = [
    {
      name: 'Lobster Bisque',
      description: 'A rich lobster soup with cream and fennel.',
      price: 295,
      allergens: ['Shellfish', 'Milk'],
      image: '/images/hummer.webp',
    },
    {
      name: 'Scallops with Cauliflower Purée',
      description: 'Seared scallops with a smooth cauliflower purée and crispy bacon.',
      price: 275,
      allergens: ['Shellfish', 'Milk'],
      image: '/images/kamskjell.webp',
    },
    {
      name: 'Gravlax with Mustard Sauce',
      description: 'Cured salmon with dill, served with mustard sauce and rye chips.',
      price: 230,
      allergens: ['Fish', 'Gluten', 'Mustard'],
      image: '/images/gravlaks.webp',
    },
    {
      name: 'Beetroot Carpaccio',
      description: 'Thinly sliced beetroot with goat cheese, walnuts, and a balsamic glaze.',
      price: 220,
      allergens: ['Milk', 'Nuts'],
      image: '/images/rødbeter.webp',
    },
    {
      name: 'Smoked Trout with Horseradish Cream',
      description: 'Delicate smoked trout with a smooth horseradish cream and rye crisps.',
      price: 250,
      allergens: ['Fish', 'Milk', 'Gluten'],
      image: '/images/røykelaks.webp',
    },
  ];

  const mainCourses = [
    {
      name: 'Reindeer Filet with Lingonberry Sauce',
      description: 'Tender reindeer served with wild mushrooms, root vegetables, and lingonberry sauce.',
      price: 595,
      allergens: [],
      image: '/images/reinsdyr.webp',
    },
    {
      name: 'Cod with Butter Sauce',
      description: 'Slow-cooked cod with beurre blanc, pea purée, and crispy potato chips.',
      price: 510,
      allergens: ['Fish', 'Milk'],
      image: '/images/torsk.webp',
    },
    {
      name: 'Duck Breast with Blackcurrant Glaze',
      description: 'Perfectly seared duck breast with a rich blackcurrant glaze, served with parsnip purée and potato fondant.',
      price: 545,
      allergens: ['Milk'],
      image: '/images/andebryst.webp',
    },
    {
      name: 'Venison Steak with Juniper Sauce',
      description: 'Grilled venison steak with a juniper berry sauce and potato rösti.',
      price: 620,
      allergens: [],
      image: '/images/biff.webp',
    },
    {
      name: 'Halibut with Lemon Butter',
      description: 'Pan-seared halibut with a lemon butter sauce, asparagus, and baby potatoes.',
      price: 580,
      allergens: ['Fish', 'Milk'],
      image: '/images/halibut.webp',
    },
  ];

  const desserts = [
    {
      name: 'Cloudberry Cream with Caramelized Nuts',
      description: 'Classic Nordic dessert with cloudberries, whipped cream, and crispy caramelized nuts.',
      price: 250,
      allergens: ['Milk', 'Nuts'],
      image: '/images/moltekrem.webp',
    },
    {
      name: 'Chocolate Fondant with Vanilla Ice Cream',
      description: 'Rich chocolate fondant with a molten center, served with vanilla ice cream.',
      price: 230,
      allergens: ['Milk', 'Egg', 'Gluten'],
      image: '/images/sjokoladefondant.webp',
    },
    {
      name: 'White Chocolate Mousse with Raspberry',
      description: 'Light and airy white chocolate mousse, served with raspberry coulis and caramelized almonds.',
      price: 225,
      allergens: ['Milk', 'Nuts'],
      image: '/images/sjokolademousse.webp',
    },
    {
      name: 'Caramelized Apple Tart',
      description: 'Warm apple tart with caramel sauce and a scoop of cinnamon ice cream.',
      price: 245,
      allergens: ['Milk', 'Gluten', 'Egg'],
      image: '/images/epleterte.webp',
    },
    {
      name: 'Blueberry Soufflé',
      description: 'A light and fluffy blueberry soufflé served with vanilla crème anglaise.',
      price: 260,
      allergens: ['Milk', 'Egg'],
      image: '/images/blåbær.webp',
    },
  ];

  return (
    <div className={styles.app}> {/* 📌 Bruker styling fra App.module.css */}
      <h1 className={styles.title}>Modern Nordic Dining</h1>
      <MenuCategory title="Starters" items={starters} />
      <MenuCategory title="Main Courses" items={mainCourses} />
      <MenuCategory title="Desserts" items={desserts} />
    </div>
  );
}

export default App;


