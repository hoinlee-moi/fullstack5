import { FormEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import { buttonCss, h1Css, inputCss, mainCss, txtCss } from "./css/appCss";

function App() {
  const [myText, setMyText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const aRef = useRef<HTMLAnchorElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const val = inputRef.current.value;
      setMyText(val);
    }
  };
  const fileCreate = (data: string) => {
    if (aRef.current) {
      const element = aRef.current;
      const pdfData = `${data}`;
      const file = new Blob([pdfData], {
        type: "application/pdf;base64",
      });
      element.href = URL.createObjectURL(file);
      element.download = "test.pdf";
    }
  };

  useEffect(() => {
    if (inputRef.current && myText !== "") fileCreate(inputRef.current.value);
  }, [myText]);

  return (
    <div className={mainCss}>
      <h1 className={h1Css}>다운로드</h1>
      <form action="submit" className="text-center" onSubmit={submitHandler}>
        <input type="text" className={inputCss} ref={inputRef} />
        <button className={buttonCss}>제출</button>
      </form>
      <p className={txtCss}>{myText}</p>
      {myText && (
        <button className={buttonCss}>
          <a href="#none" ref={aRef}>
            다운로드
          </a>
        </button>
      )}
    </div>
  );
}

export default App;
