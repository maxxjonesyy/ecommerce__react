import { useState } from "react";

function useSelectSize() {
  const [value, setValue] = useState("");
  const handleSelectChange = (e) => setValue(e.target.value);

  return { value, handleSelectChange };
}

export default useSelectSize;
