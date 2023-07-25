import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Correct the import statement to the correct filename

const AlbumList = (props) => {
  const handleSelectionOne = (albumId) => {
    console.log('selected ID is ' + albumId);
    props.onClick(albumId, navigate);
  };

  console.log('props albumList', props);

  const navigate = useNavigate(); // Correct the variable name to "navigate"

  const albums = props.albumList.map((album) => {
    return (
      <Card
        key={album.id}
        albumId={album.id}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="ok"
        imgURL={album.image}
        onClick={handleSelectionOne}
      />
    );
  });

  return <div className="container"> {albums}</div>;
};

export default AlbumList;
