// src/components/ImageGallery.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles, incrementViewCount } from '../redux/fileThunks';
import ImageCard from './ImageCard';

console.log("==>>",fetchFiles, incrementViewCount)

const ImageGallery = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  console.log("file=>",files)
  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const handleImageClick = async (fileId) => {
    await dispatch(incrementViewCount(fileId));
  };

  return (
    <div className="image-gallery">
      {files.map((file) => (
        <ImageCard key={file._id} file={file} onClick={() => handleImageClick(file._id)} />
        
      ))}
    </div>
  );
};

export default ImageGallery;
