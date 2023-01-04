const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  isPopupOpen: false,
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'OPEN_POPUP':
      return { ...state, isPopupOpen: true };
    case 'CLOSE_POPUP':
      return { ...state, isPopupOpen: false };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.task] };
    case 'SET_TASKS':
      return { ...state, tasks: [...action.tasks] };

    default:
      return state;
  }
}
