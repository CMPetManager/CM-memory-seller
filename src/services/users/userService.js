const baseUrl = 'https://3.74.27.247:8080/';

export const registerUser = async (name, email, password) => {
  const user = {
    name,
    email,
    password,
  };
  console.log(user);

  const response = await fetch(`${baseUrl}users/confirm-account`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();

  console.log(response);
  console.log(result);

  return { result, status: response.status };
};

export const loginUser = async (email, password) => {
  const user = {
    email,
    password,
  };
  console.log(user);
  const response = await fetch(`${baseUrl}users/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  console.log(response);
  console.log(result);

  return { result, status: response.status, success: response.ok };
};
