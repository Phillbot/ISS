import { getOperators } from "../api/test";

//Сервис

export const getOperatorsFetch = (setState: Function) => {
  fetch(getOperators)
    .then(res => res.json())
    .then(
      result => {
        setState({
          isLoaded: true,
          operatorsList: result.result
        });
      },
      error => {
        setState({
          isLoaded: true,
          error: true
        });
      }
    );
};
