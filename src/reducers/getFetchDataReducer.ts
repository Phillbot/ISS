const InitialState = {
  issNowRedux: null,
  issPeopleRedux: null
};

export default function getFetchData(state: {} = InitialState, action: any) {
  switch (action.type) {
    case "ISS_NOW":
      return { ...state, issNowRedux: action.payload };

    case "ISS_PEOPLE":
      return { ...state, issPeopleRedux: action.payload };

    default:
      return state;
  }
}
