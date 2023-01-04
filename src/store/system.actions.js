export function openPopup() {
  return (dispatch) => {
    dispatch({
      type: 'OPEN_POPUP',
    });
  };
}

export function closePopup() {
  return (dispatch) => {
    dispatch({
      type: 'CLOSE_POPUP',
    });
  };
}

export function addTask(task) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TASK',
      task,
    });
  };
}

export function setTasks(tasks) {
  return (dispatch) => {
    dispatch({
      type: 'SET_TASKS',
      tasks,
    });
  };
}
