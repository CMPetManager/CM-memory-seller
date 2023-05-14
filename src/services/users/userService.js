const baseUrl = 'https://www.google.com.ua/';

export const loginUser = async (email, password) => {
  const user = {
    email,
    password,
  };
  console.log(user);
  const response = await fetch(`${baseUrl}login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  return { result, status: response.status, success: response.ok };
};
