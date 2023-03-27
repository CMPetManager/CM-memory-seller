const url = 'http://localhost:4000/';

export const loginUser = async (email, password) => {
  const user = {
    email,
    password,
  };
  console.log(user);
  const response = await fetch(`${url}login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();
  // console.log(result);
  return result;
};
