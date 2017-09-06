import React from 'react';

const PreviewPicture = (props) => {
  const { picture, pictureUrl } = props;

  if (!pictureUrl) {
    return (
      <div style={{
        height: '500px', borderWidth: '.1rem',
        borderStyle: 'solid', borderColor: 'grey'
      }} className="text-center mb-1">
        {picture}
      </div>
    );
  }
  else {
    return (
      <img className="img-fluid mb-2 mt-2" src={pictureUrl}/>
    );
  }
};

export default PreviewPicture;
