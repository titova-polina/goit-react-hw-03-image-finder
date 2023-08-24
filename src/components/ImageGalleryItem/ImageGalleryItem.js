import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  return (
    <GalleryItem>
      <a href={largeImageURL}>
        <GalleryImg src={webformatURL} alt={tags} loading="lazy" />
      </a>
    </GalleryItem>
  );
};
