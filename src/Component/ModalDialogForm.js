import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Capitalize 'Button'
import Modal from 'react-bootstrap/Modal';
import useUpdateCourse from '../CallsApi/CRUDcourse/Update.js';

export default function ModalDialogForm({ selectedCourse, hideForm }) {
  const [name, setName] = useState(selectedCourse?.name || '');
  const [code, setCode] = useState(selectedCourse?.code || '');
  const [status, setStatus] = useState(selectedCourse?.status || '');

  const { updateCourse, updatedCourse, loading, error } = useUpdateCourse();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      code,
      status
    };
    console.log(data)

    updateCourse(selectedCourse.id, data);
      // Close the modal
  hideForm();

  // Reload the page
  window.location.reload();

  };


  return (
    <div className="modal show" style={{ display: 'block' }}>
      <Modal.Dialog>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" value={name} onChange={handleNameChange} />
              <Form.Label>Code:</Form.Label>
              <Form.Control type="text" name="code" value={code} onChange={handleCodeChange} />
              <Form.Label>Status:</Form.Label>
              <Form.Control type="text" name="status" value={status} onChange={handleStatusChange} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
