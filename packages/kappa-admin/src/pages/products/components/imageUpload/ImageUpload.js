/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@kappa/components/src/atoms/iconButton';
import Paper from '@kappa/components/src/atoms/paper';

// /* STYLES */
import useStyles from './imageUpload.styles';

import BASE_URL from '../../../../constants/baseURL';

export default function ImageUpload({ setImageFiles, productFields }) {
  const fileObj = [];
  const fileArray = [];

  const [imageFileArray, setImageFileArray] = React.useState(null);

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setImageFiles(fileObj);
    setImageFileArray(fileArray);
  };

  const classes = useStyles();

  return (
    <form>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={(e) => uploadMultipleFiles(e)}
        multiple
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <div className={classes.content}>
        {imageFileArray
          ? (imageFileArray || []).map((url) => (
            <Paper className={classes.imageContainer}>
              <img
                src={url}
                alt="..."
                className={classes.image}
              />
            </Paper>
          )) : (productFields.images && productFields.images.length !== 0)
          && (productFields.images.map((image) => (
            <Paper className={classes.imageContainer}>
              <img
                src={`${BASE_URL}/api/v1/files/${image}`}
                alt="..."
                className={classes.image}
              />
            </Paper>
          ))
          )}
      </div>
    </form>
  );
}
