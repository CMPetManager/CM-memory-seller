import './AlbumsList.css';

const AlbumsList = ({ isChecked, albums }) => {
  return albums.map((chunk, i) => (
    <ul className='albums__list' key={i}>
      {chunk.map((album) => (
        <AlbumsItem album={album} key={album.id} isChecked={isChecked} />
      ))}
    </ul>
  ));
};

const AlbumsItem = ({ album, isChecked }) => {
  return (
    <li
      className={
        isChecked
          ? 'albums__list-item albums__list-item_minimize'
          : 'albums__list-item '
      }
      data-title={album.albumName}
    >
      <img
        src={album.coverUrl}
        alt={album.albumDescription}
        className='albums__list-img'
      />
    </li>
  );
};
export default AlbumsList;
