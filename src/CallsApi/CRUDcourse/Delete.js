import axios from 'axios';


const deleteCourse = async (courseId) => {
    await axios.delete(`http://localhost:4000/CRUDcourse/deleteCourse/${courseId}`);
    return true;
  };
  
export default deleteCourse;

