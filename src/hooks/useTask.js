import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx"

export function useTasks() {
    return useContext(TodoContext);
}
