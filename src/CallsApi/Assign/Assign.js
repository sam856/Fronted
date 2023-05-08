import axios from "axios";
import { useEffect, useState } from "react";
const Assign = ({ courseId, instructorId }) => {
  const [assignedCourses, setAssignedCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const assignCourse = async (courseId, instructorId) => {
      try {
        setLoading(true); 
        const senddata={id:courseId}
        const response = await axios.post(
          "http://localhost:4000/AssignCouse/AssignCourse/"+ instructorId,
          senddata,
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        );
        
        setAssignedCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong, please try again later!");
        setLoading(false);
      }
    };

    assignCourse(courseId, instructorId);
  }, [courseId, instructorId]);

  return { assignedCourses, loading, error };
};
export default  Assign ; 