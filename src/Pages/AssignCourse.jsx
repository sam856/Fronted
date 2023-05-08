import React, { useState } from 'react';
import '../Style/Tables.css';
import ListName from '../CallsApi/Assign/ListName.js';
import ListInstractor from '../CallsApi/Assign/ListInstractor.js';
import Assign from '../CallsApi/Assign/Assign.js';
import { Form, Formik } from 'formik';
import Select from 'react-select';
const AssignCourse = () => {
  const { courses, loading, error } = ListName();
  const { instractors, loadingInstructor, errorInstructor } = ListInstractor();

  const [selectedInstructors, setSelectedInstructors] = useState({});

  const { assignedCourses, loadingAssigned, errorAssign } = Assign({
    id: selectedInstructors.courseId,
    instructorId: selectedInstructors.instructorId,
  });

  const handleAssign = (event) => {
    event.preventDefault();

    const form = event.target;
    const courseId = form.elements.courseId.value;
    const instructorId = form.elements.instructorId.value;

    setSelectedInstructors({ courseId, instructorId });

  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
    return (
      
    <Formik
      initialValues={{ colors: '' }}

      onSubmit={(values) => {  
        console.log(values)
       
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        formikProps
        /* and other goodies */
      }) => (
        <Form>
          <Select
            //defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
         //   name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            // value={options.find((option) => option.value === formikProps.values.colors)}
            onChange={(option) => formikProps.setFieldValue('colors', option.value)}
          />
          <button type='submit'>
          submit
          </button>

        </Form>
      )}
    </Formik>
  

    );
};

export default AssignCourse;