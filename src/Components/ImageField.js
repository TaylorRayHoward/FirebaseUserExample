import React, { Component } from 'react';
import PreviewPicture from '../Containers/PreviewPicture';

class InputField extends Component {
  displayPicture(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      console.log(file);
      this.setState({
        picture: file,
        pictureUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  constructor(state) {
    super(state);
    this.state = {
      picture: 'Please attach a picture',
      pictureUrl: null
    };
  }

  render() {
    const { required, input, label } = this.props;
    delete input.value;
    return (
      <div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">{`${label} ${required ? '*' : ''}`}</label>
          <div className="col-sm-9">
            <input type="file"
                   className="form-control"
                   {...input}
                   onChange={(event) => {
                     this.displayPicture(event);
                   }}
            />
          </div>
        </div>
        <PreviewPicture picture={this.state.picture} pictureUrl={this.state.pictureUrl}/>
      </div>
    );
  }
}

export default InputField;
