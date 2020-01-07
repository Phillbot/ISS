const InitialState = {
  test: "Hello"
};

export default function testReducer(state: {} = InitialState, action: any) {
  switch (action.type) {
    case "HELLO":
      return { ...state, test: action.payload };

    default:
      return state;
  }
}
