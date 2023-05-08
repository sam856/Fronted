import axios from "axios";
import { useEffect, useState } from "react";

const ListInstractor = () => {
  const [instractors, setinstractor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchinstractor = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4000/AssignCouse/Allinstractor`
        );
        setinstractor(response.data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong, please try again later!");
        setLoading(false);
      }
    };

    fetchinstractor();
  }, []);


  return { instractors, loading, error };
};
export default ListInstractor;