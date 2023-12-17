import { useState } from "react";
import Characters from "./../../../assets/heroes-data.json";
import Image from "./components/Image";

const characters = Characters;
function Images() {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const findCharacter = (characterId) =>
    !!images.find((id) => id === characterId);

  const handleCheck = (characterId) => {
    const filteredIds = findCharacter(characterId)
      ? images.filter((id) => id !== characterId)
      : [characterId, ...images];
    setImages(filteredIds);
  };

  const handleClick = (imageId) => {
    if (!selectedImages.includes(imageId)) {
      const selectedImage = (characters || []).find(
        (character) => character.id === imageId
      );
      setSelectedImages([...selectedImages, selectedImage.id]);
    } else {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    }
  };

  return (
    <div className="card min-h-100">
      <h3 className="card-title text-center mt-2 mb-0">Images Repository</h3>
      <div className="card-body d-flex flex-wrap justify-content-center">
        {(characters || []).map((character) => (
          <Image
            key={character.id}
            id={character.id}
            title={character.name}
            source={character.photo}
            description={character.description}
            onChange={handleCheck}
            isSelected={selectedImages.includes(character.id)}
            onImageClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Images;
