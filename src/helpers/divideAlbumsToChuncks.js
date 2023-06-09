export const divideToChunks = (arr, num) => {
  const chunksAlbums = [];

  for (let i = 0; i < arr.length; i += num) {
    chunksAlbums.push(arr.slice(i, i + num));
  }
  return chunksAlbums;
};
