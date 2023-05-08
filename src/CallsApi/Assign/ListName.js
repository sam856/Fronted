import axios from "axios";
import { useEffect, useState } from "react";

const ListName = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4000/AssignCouse`
        );
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong, please try again later!");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  return { courses, loading, error };
};
export default ListName;