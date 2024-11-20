import { useState } from "react";

function useCustomState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const reset = () => setValue(initialValue); // Reset state to initial value
  return [value, setValue, reset]; // Return state, updater, and custom logic
}
export default useCustomState;
