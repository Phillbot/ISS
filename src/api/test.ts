const params = {
  domain: "http://172.30.5.234",
  apiTraining: "/api/v1/Training/",
  apiProfile: "/api/v1/profile/",
  apiEmployees: "/api/v1/employees/",
  port: ""
};

const { domain, apiProfile, apiEmployees, apiTraining, port } = params;

export const getOperators = `${domain}${port}${apiProfile}getOperators`;

//Time sv-oper api
