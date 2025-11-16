// import { use } from "react";
import {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import UseRefExample from "./useRef";

const App = () => {
  const [color, setColor] = useState("gray");

  const [count, setCount] = useState(0);

  //  useRef: متغییرهایی رو می خواهیم تعریف کنیم و نمی خواهیم باعث ری رندر بشوند و مقدار خودشان رو حفظ کنند با useRef تعریف می کنیم
  // let countvalue = 0;
  let countvalue = useRef(0);

  const handleClick = () => {
    countvalue.current += 2;
    setCount(countvalue.current + 1);
  };

  // useEffect Test:
  // کاربرد : هر موقع عملیات ما نیازمند زمان باشند،مثل دریافت اطلاعات از سمت سرور
  useEffect(() => {
    console.log("useEffect اجرا شد");
    setColor("lightgreen");
  }, []);

  // useLayoutEffect:
  // کاربرد: تغییر در UI صفحه اعمال کنیم
  // اگر جایی useEffect توی تغییر المانهای صفحه یک تاخیر ببینیم با useLayoutEffect هندل می کنیم
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect اجرا شد😉");
  //   setColor("lightblue");
  // }, []);

  // useInsertionEffect:
  // useInsertionEffect(() => {
  //   console.log("useInsertionEffect اجرا شد.");
  //   setColor("Orange");
  // }, []);

  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "100px",
          backgroundColor: color,
          margin: "30px auto",
          textAlign: "center",
          paddingTop: "30px",
          transition: "all 0.3s",
        }}
      >
        Box Color : {color}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-6 ">
          <h2 className="text-3xl font-bold text-gray-800">Counter App</h2>
          <div className="flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-r from-amber-500 to-red-300 shadow-lg">
            <span className="text-5xl font-bold text-white">{count}</span>
          </div>
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform
          hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            افزایش
          </button>
      <p className="text-gray-600 text-center">
        برای افزایش عدد شمارنده، کلیک کنید
      </p>
      <div className="mt-6">
        <UseRefExample />
      </div>
    </div>
  </div>
</div>
  );
};

export default App;
