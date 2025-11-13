// import { use } from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [color , setColor] = useState("gray");

  // useEffect Test:
  useEffect(() =>{
    console.log("useEffect اجرا شد" );
    setColor("lightgreen");    
  } , []);

  return(
    <div
    style={{
      width: "300px",
      height: "100px",
      backgroundColor: color,
      margin: "30px auto",
      textAlign: "center",
      paddingTop: "30px",
      transition: "all 0.3s",
    }}>
      Box Color : {color}
    </div>
  );
};

export default App;
