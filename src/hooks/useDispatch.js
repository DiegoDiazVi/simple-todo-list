import { useContext } from "react";
import { TodoDispatchContext } from "../context/TodoContext.jsx";

export function useDispatch() {
    return useContext(TodoDispatchContext);
}
