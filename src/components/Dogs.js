import React, { useState, useEffect } from "react"
import axios from "axios"


function Dogs() {



  const [dog, setDog] = useState({});
  const url = "https://dog.ceo/api/breeds/image/random"

  const generateImage = async () => {
    const response = await axios.get(url);
    console.log(response)
    setDog(response.data.message)
  }
  useEffect(() => {
    generateImage()
  }, [])


  return (
    <div>

      <h3>Generate a random dog</h3>
      <button onClick={() => generateImage()}>Dog Me!</button>
      <br />
      <img src={dog} />
    </div>
  );
}

export default Dogs;