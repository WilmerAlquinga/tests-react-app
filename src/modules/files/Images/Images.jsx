import { Component } from "react";
import Image from "./components/Image";

class Images extends Component {
  render() {
    return <div className="card min-h-100">
        <h3 className="card-title text-center mt-2">Images Repository</h3>
        <div className="card-body">
            <Image />
        </div>
    </div>;
  }
}

export default Images;
