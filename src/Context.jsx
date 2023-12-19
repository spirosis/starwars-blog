import { createContext, useState } from 'react';

export const Context = createContext();

export const FavoritesContext = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addFavorite = (item) => {
    favoriteItems.includes(item)
      ? null
      : setFavoriteItems(favoriteItems.concat(item));
  };

  const removeFavorite = (item) => {
    setFavoriteItems(favoriteItems.filter((el) => el.uid !== item.uid));
  };

  return (
    <Context.Provider value={{ favoriteItems, addFavorite, removeFavorite }}>
      {children}
    </Context.Provider>
  );
};