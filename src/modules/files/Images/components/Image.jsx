import "../components/Image.scss";

function Image({ id, title, source, description, onChange, isSelected, onImageClick }) {
  const handleChange = () => {
    onChange(id);
  };

  const handleClick = () => {
    onImageClick(id);
  };

  return (
    <div>
      <div className={`image-container card m-1 rounded ${isSelected ? 'selected-image' : ''}`} onClick={handleClick}>
        <img
          id={id}
          src={source}
          alt={description}
          className="img-repo rounded mt-2"
        />
        <span type="button" className="button-edit" onClick={(e) => e.stopPropagation()}>
          Edit
        </span>
        <input
          type="checkbox"
          className="checkbox-left"
          id="exampleCheck1"
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
        ></input>
        <div className="card-body pt-2 pb-0">
          <h5 className="card-title text-center">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Image;
