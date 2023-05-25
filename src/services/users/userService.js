const baseUrl = 'http://35.158.8.207:8080/';

export const loginUser = async (email, password) => {
  const user = {
    email,
    password,
  };

  const response = await fetch(`${baseUrl}login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response);
  const result = await response.json();

  return { result, status: response.status };
};
