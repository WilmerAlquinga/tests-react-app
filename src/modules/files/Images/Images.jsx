import Characters from "./../../../assets/data.json";
import Image from "./components/Image";

const characters = Characters;
function Images() {
  return (
    <div className="card min-h-100">
      <h3 className="card-title text-center mt-2 mb-0">Images Repository</h3>
      <div className="card-body d-flex flex-wrap justify-content-center">
        {characters.map((character) => (
          <Image
            key={character.id}
            id={character.id}
            title={character.name}
            source={character.photo}
            description={character.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Images;
