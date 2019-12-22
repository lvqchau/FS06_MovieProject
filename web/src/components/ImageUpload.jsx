import React, { Component } from "react";
import { storage } from "../Firebase";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      cgv: "",
      bhd: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.getImage1 = this.getImage("bhd.png", "bhd");
    this.getImage = this.getImage("cgv.png", "cgv");
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      console.log(this.state);
    }

    console.log(e.target.files[0]);
  };

  getImage = (image, label) => {
    let { state } = this;
    storage
      .ref()
      .child(`images/cinemas/logos/${image}`)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        state[label] = url;
        this.setState(state);
      })
      .catch(error => {
        // Handle any errors
      });
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //progress funtion
      },
      error => {
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
        <br />
        <img
          src={this.state.url || "http://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
        <img
          src={this.state.cgv}
          alt="Lithuanian flag"
          height="300"
          width="400"
        />
        <img
          src={this.state.bhd}
          alt="Lithuanian flag"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;
