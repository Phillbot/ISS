import { issNow, issPeople } from "../api";
import axios from "axios";
//Сервис

export const getIssData = async (setState: Function) => {
  try {
    const issNowFetch = await axios(issNow);

    const { data } = issNowFetch;

    await setState({
      issNowIsLoaded: true,
      issNow: data
    });
  } catch (error) {
    await setState({
      issNowIsLoaded: true,
      issNowError: true
    });
  }

  try {
    const issPeopleFetch = await axios(issPeople);

    const { data } = issPeopleFetch;

    await setState({
      issPeopleIsLoaded: true,
      issPeople: data
    });
  } catch (error) {
    await setState({
      issPeopleIsLoaded: true,
      issPeopleError: true
    });
  }
};
