import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Signup from "./Signup";

// ------------------------------------------------------------------------------------------------>
const SecretKey = () => {
  const [validSecretKey, setValidSecretKey] = useState(false);
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    const secretKeyFlow = async () => {
      const promptValue = window.prompt("Input your SecretKey");

      if (promptValue === null || promptValue === "") {
        alert("Enter the SecretKey");
        navigate(-1);
        return;
      }

      const res = await axios.post("http://localhost:4000/api/secretKey", {
        secretKey: promptValue,
      });

      if (res.data === "success") {
        alert("Valid SecretKey");
        setValidSecretKey(true);
        return;
      }
      else if (res.data === "fail") {
        alert("Invalid SecretKey");
        navigate(-1);
        return;
      }
      else {
        alert(`${res.data}에러발생`);
        navigate(-1);
        return;
      }
    };

    secretKeyFlow();
  }, [navigate]);

  if (validSecretKey) {
    return <Signup />;
  }
  else {
    return <></>;
  }
};

export default SecretKey;
