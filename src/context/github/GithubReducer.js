const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_REPOS":
        return {
            ...state,
            user: action.payload,
            loading: false,
        }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
  }
};

export default githubReducer;
