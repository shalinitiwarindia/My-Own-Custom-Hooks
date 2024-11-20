![Screenshot 2024-11-20 155423](https://github.com/user-attachments/assets/079cc07a-49d4-483d-aa7d-6a376453d408)
1. useToggle
Purpose: Manages a boolean state with a toggle function.
Parameters:
initialValue (default: false) - Initial state value.
Returns:
state - Current boolean value.
toggle - Function to switch between true and false.
Example:
const [isVisible, toggleVisibility] = useToggle();

2. useFetch
Purpose: Fetches data from a given URL and manages loading, success, and error states.
Parameters:
url - API endpoint to fetch data from.
Returns:
data - Fetched data.
loading - Boolean indicating fetch status.
error - Error message, if any.
Example:
const { data, loading, error } = useFetch("https://api.example.com");

3. useCustomState
Purpose: Extends useState with a reset function to restore initial state.
Parameters:
initialValue - Starting state value.
Returns:
state - Current state value.
setState - Function to update the state.
reset - Function to reset state to its initial value.
