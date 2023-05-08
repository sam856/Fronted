import React, { useState } from 'react'
import '../Style/Tables.css'
import ModalDialogSure from '../Component/ModalDialogSure.js'
import ModalDialogForm from '../Component/ModalDialogForm.js'
import useFetchCourses from '../CallsApi/CRUDcourse/useFetchCourses.js'
import  deleteCourse from '../CallsApi/CRUDcourse/Delete.js'



const VeiwCourses = () =>  {
    const { courses, loading, error } = useFetchCourses();
    const [selectedCourse, setSelectedCourse] = useState(null);

    const [show, setShow] = useState(false);
    const [Form, setForm] = useState(false);
    const handleClose = () => setShow(false);
    const CloseForm = () => setForm(false);
    const ShowForm = (course) => {
        setSelectedCourse(course);
        setForm(true);
      };



    return (
         <div>
 
        <div className='TableContaier'>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                        <th> Action </th>

                    </tr>
                </thead>
                    <tbody>

                        {courses.map((course) => (
                            
                            <tr key={course.id}>
                                <td>{course.name}</td>
                                <td>{course.code}</td>
                                <td>{course.status}</td>
                                <td>
                                    <button onClick={() => ShowForm(course)}>Update</button>
                                    
                                    <button onClick={() => {deleteCourse(course.id);
                                      window.location.reload(); }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

            </table>
            {
                show === true ? <ModalDialogSure  hide={handleClose} /> : ''
    
            }

            {
                Form === true ? <ModalDialogForm selectedCourse={selectedCourse} hideForm={CloseForm} /> : ''
            }
        </div>
 </div>



    )

}

export default VeiwCourses;
