import { useSearchParams } from "react-router-dom";

export default function Test1() {
  const [searchParams, setSearchParams] = useSearchParams();

  const myParam = searchParams.get("myParam");

  const handleParamChange = (value) => {
    setSearchParams({ myParam: value });
  };

  return (
    <>
      <p>My param: {myParam}</p>
      <button onClick={() => handleParamChange("newValue")}>Set param</button>
    </>
  );
}
