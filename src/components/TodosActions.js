import Button from "./Todos/UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.modules.css";
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!deleteCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodosActions;
