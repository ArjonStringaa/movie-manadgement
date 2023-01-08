import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const MovieForm = (props) => {
  const [movie, setMovie] = useState({
    moviename: props.movie ? props.movie.moviename : "",
    producer: props.movie ? props.movie.producer : "",
    quantity: props.movie ? props.movie.quantity : "",
    price: props.movie ? props.movie.price : "",
    date: props.movie ? props.movie.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { moviename, producer, price, quantity } = movie;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [moviename, producer, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const movie = {
        id: uuidv4(),
        moviename,
        producer,
        price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(movie);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setMovie((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setMovie((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setMovie((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="moviename"
            value={moviename}
            placeholder="Enter name of movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="producer">
          <Form.Label>Movie Producer</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="producer"
            value={producer}
            placeholder="Enter name of producer"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available places"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Movie Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MovieForm;
