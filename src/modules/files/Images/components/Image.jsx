import { Component } from "react";

class Image extends Component {
  render() {
    return <div className="card" style={{width: 16 + 'rem'}}>
      <img className="card-img-top" src="..." alt="Image 1" className="img-repo" />
      <div className="card-body pb-0">
        <h5 className="card-title text-center">Image Title</h5>
      </div>
    </div>
    ;
  }
}

export default Image;
