import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from './UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  function handleFormSubmit(event) {
    event.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            placeholder="Enter new todo"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <Button type="submit" title="Submit">Submit</Button>
      </form>
    </div>
  );
}
export default TodoForm;
