import React, { useCallback, useState } from "react";
import { createProducts } from "../lib/api/products";
import styled from "@emotion/styled";

import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CancelIcon from "@material-ui/icons/Cancel";
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: 320,
  },
  inputFileBtn: {
    marginTop: "10px",
  },
  submitBtn: {
    marginTop: "10px",
    marginLeft: "auto",
  },
  box: {
    margin: "2rem 0 4rem",
    width: 320,
  },
  preview: {
    width: "100%",
  },
}));
const Input = styled("input")({
  display: "none",
});
const borderStyles = {
  bgcolor: "background.paper",
  border: 1,
};

function ProductForm({ handleGetPost }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");

  const uploadImage = useCallback((e) => {
    const file = e.target.files[0];
    setImage(file);
  }, []);

  const previewImage = useCallback((e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
  }, []);
  const createFormData = () => {
    const formData = new FormData();
    formData.append("title", title);
    if (image) formData.append("image", image);
    return formData;
  };
  const handleCreatePost = async (e) => {
    const data = createFormData();
    await createProducts(data).then(() => {
      setTitle("");
      setPreview("");
      setImage(undefined);
      handleCreatePost();
    });
  };
  return (
    <div>
      <form className={classes.form} noValidate onSubmit={handleCreatePost}>
        <TextField
          placeholder="hello"
          variant="outlined"
          multiline
          fullwidth="true"
          row="4"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>
          <label htmlFor="icon-button-file">
            <Input
              type="file"
              accept="image/*"
              id="icon-button-file"
              onChange={(e) => {
                uploadImage(e);
                previewImage(e);
              }}
            />
            <PhotoCameraIcon />
          </label>
        </div>
        <div className={classes.submitBtn}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="inherit"
            disabled={!title || title.length > 140}
            className={classes.submitBtn}
          >
            Post
          </Button>
        </div>
      </form>
      {preview ? (
        <Box
          sx={{ ...borderStyles, borderRadius: 1, borderColor: "grey.400" }}
          className={classes.box}
        >
          <IconButton color="inherit" onClick={() => setPreview("")}>
            <CancelIcon />
          </IconButton>
          <img src={preview} alt="preview img" className={classes.preview} />
        </Box>
      ) : null}
    </div>
  );
}

export default ProductForm;
