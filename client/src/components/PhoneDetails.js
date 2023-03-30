import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function PhoneDetails() {
    const [phoneDetails, setphoneDetails] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const {id} = useParams()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/phones/${id}`);
            setphoneDetails(response.data)
            setIsFetching(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
          {isFetching ? (
            <BeatLoader loading={true} />
          ) : (
            <div>
              <h1>Teeechnology!</h1>
              
                <h2>{phoneDetails.name}</h2>
                <p>{phoneDetails.manufacturer}</p>
                <p>{phoneDetails.description}</p>
                <p>{phoneDetails.color}</p>
                <p>{phoneDetails.price}</p>
                <p>{phoneDetails.screen}</p>
                <p>{phoneDetails.processor}</p>
                <p>{phoneDetails.ram}</p>
              
            </div>
          )}
        </div>
      );
    }
export default PhoneDetails