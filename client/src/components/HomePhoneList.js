import { useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Link} from "react-router-dom";

function HomePhoneList() {
  const [phones, setPhones] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  // services doesn't work idk why
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      console.log(response.data);
      setPhones(response.data);
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
          <h1>Teeechnology!</h1>
          <ul className="phones">
            {phones.map((eachPhone) => {
              return (
                <Link to={`/phones/${eachPhone._id}`}>
                  <li key={eachPhone._id} className="phone-name">
                    <h2>{eachPhone.name}</h2>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomePhoneList;
