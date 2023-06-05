export const filterAlbums = (arr, search) => {
  if (!search.trim()) {
    return arr;
  }
  return arr.filter((item) =>
    item.albumName.toLowerCase().includes(search.toLowerCase())
  );
};
