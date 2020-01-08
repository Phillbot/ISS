export function getFetchDataActionIss(data: string) {
  return {
    type: "ISS_NOW",
    payload: data
  };
}

export function getFetchDataActionPeople(data: string) {
  return {
    type: "ISS_PEOPLE",
    payload: data
  };
}
