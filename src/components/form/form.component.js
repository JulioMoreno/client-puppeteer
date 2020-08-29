import React, { useState } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
import {
  Paper,
  Button,
  FormGroup,
  TextField,
  TextareaAutosize,
  Typography,
  Container,
} from "@material-ui/core";

const override = css`
  display: block;
  heigth: 35;
  padding:20;
  margin: 0 auto;
  border-color: red;
`;

const Form = () => {
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState(0);
  const [postImg, setPostImg] = useState("");
  const [success, setSuccess] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handlePost = async () => {
    if (!isNaN(price) && price > 0 && desc.length > 1) {
    setPublishing(true)
      let res = await axios.post(`http://localhost:3001/post/car_ads`, {
        price: price,
        description: desc,
      });
      if (res.status === 201) {
        setPostImg(res.data.post_imge);
        setPublishing(!publishing)
        if(!success) setSuccess(true);
      } 
    } else alert("Los campos son obligatorios");
  };

  return (
    <Container>
      <Paper>
        <FormGroup>
          <TextField
            onChange={handleChangePrice}
            required
            id="price"
            label="Precio"
            placeholder="Precio"
            variant="outlined"
            size="small"
          /><br/>
          <TextareaAutosize
            onChange={handleChangeDesc}
            required
            aria-label="minimum height"
            rowsMin={3}
            variant="outlined"
            placeholder="Escriba una descripción de su producto"
          /><br/>
          <Button onClick={handlePost} variant="contained" color="primary">Publicar anuncio</Button>
        </FormGroup>
      </Paper><br/>
      { publishing && ( 
          <div>
        <Typography variant="h6" align="center">
            Estamos publicando su anuncio...
          </Typography>
      <BarLoader
          css={override}
          size={60}
          color={"#123abc"}
          loading={true}
          width={"50%"}
        />
        </div>
      )}
      
      {success && (
        <div>
          <Typography variant="h6" align="center">
            Su anuncio ha sido publicado
          </Typography>
          <img src={postImg} alt="post"/>
        </div>
      )}
    </Container>
  );
};
export default Form;
