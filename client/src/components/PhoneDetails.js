import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function PhoneDetails() {
  const [phoneDetails, setphoneDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/${id}`
      );
      setphoneDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isFetching ? (
        <BeatLoader loading={true} />
      ) : (
        <div>

          <h1>{phoneDetails.name}</h1>
          <blockquote className="blockquote-home">
            <p> <span className="manufacturer">{phoneDetails.manufacturer}</span></p>
            <p>{phoneDetails.description}</p>
            <p>Color: <span>{phoneDetails.color}</span></p>
            <p>{phoneDetails.price}$</p>
            <p>Screen: <span>{phoneDetails.screen}</span></p>
            <p>Processor: <span>{phoneDetails.processor}</span></p>
            <p>Ram: <span>{phoneDetails.ram}</span></p>
          </blockquote>
        </div>
      )}
    </div>
  );
}
export default PhoneDetails;
