import axios from "axios";
import { useEffect, useState } from "react";


const useUpdateCourse = () => {
    const [updatedCourse, setUpdatedCourse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const updateCourse = async (courseId, courseData) => {
      try {
        setLoading(true);
        const response = await axios.put(
          `http://localhost:4000/CRUDcourse/updateCourse/${courseId}`,
          courseData,
          {
            headers: {
              "Content-Type": "application/json"
            },
          }
        );
        setUpdatedCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong, please try again later!");
        setLoading(false);
      }
    };
  
    return { updateCourse, updatedCourse, loading, error };
  };
  export default useUpdateCourse;