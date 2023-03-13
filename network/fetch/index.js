const getUsers = async (names) => {
  let url = "https://api.github.com/users/";
  return await Promise.all(
    names.map(async (name) => {
      const response = await fetch(`${url}${name}`, { method: "GET" });
      if (response.ok) {
        return await response.json();
      } else {
        return null;
      }
    })
  );
};
