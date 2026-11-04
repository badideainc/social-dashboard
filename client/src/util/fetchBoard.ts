export const fetchBoard = async () => {
  const response = await fetch("api/getBoard");

  console.log(response.body);
};
