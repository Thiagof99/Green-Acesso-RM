class LocalStorage {
    saveFavorite(item: string) {
      const favorites = this.getFavorites();
      favorites.push(item);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  
    deleteFavorite(item: string) {
      const favorites = this.getFavorites();
      const index = favorites.indexOf(item);
      if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    }
  
    getFavorites() {
      let favorites: string[] = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') as string) : [];
      return favorites;
    }
  }
  
  export default LocalStorage;