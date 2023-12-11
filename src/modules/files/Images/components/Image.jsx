function Image({ id, title, source, description, onChange }) {
  const handleChange = () => {
    onChange(id);
  };

  return (
    <div>
      <div className="card m-1 rounded" style={{ width: 16 + "rem" }}>
        <img
          id={id}
          src={source}
          alt={description}
          className="img-repo rounded mt-2"
        />
        <span type="button" className="button-edit">
          Edit
        </span>
        <input
          type="checkbox"
          className="checkbox-left"
          id="exampleCheck1"
          onChange={handleChange}
        ></input>
        <div className="card-body pt-2 pb-0">
          <h5 className="card-title text-center">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Image;
