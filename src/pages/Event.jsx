import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Event.css';
import { useFirebase } from '../context/Firebase';

function Event() {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.eventReg(email, num, name, branch, year);
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h2>Khazane ki khoj!</h2>
        <h5>Rules :</h5>
        <p>There Should be at least one girl in the team</p>
        <p>First ones to find the clue will be promoted to the next round.</p>
        <p>Limited number of clues</p>

        {submitted ? (
          <div className="alert alert-success" role="alert">
            Registration complete!Get Ready for the Event
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNum">
              <Form.Label>Whatsapp Number</Form.Label>
              <Form.Control type="number" onChange={(e) => setNum(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Select aria-label="Default select example" onChange={(e) => setBranch(e.target.value)}>
              <option>Your Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="ELEC">ELEC</option>
              <option value="MECH">MECH</option>
              <option value="CHEM">CHEM</option>
              <option value="CIVIL">CIVIL</option>
              <option value="META">META</option>
              <option value="MINING">MINING</option>
              <option value="BIOTECH">BIOTECH</option>
              <option value="BIOMED">BIOMED</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" onChange={(e) => setYear(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
