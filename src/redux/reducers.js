const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return action.users;
    case "ADD_USER":
      return [...state, action.user];
    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.user.id ? { ...state, ...action.user } : user
      );
    case "REMOVE_USER":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};
