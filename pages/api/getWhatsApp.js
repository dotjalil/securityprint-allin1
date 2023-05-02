export default async function getWhatsappNumber(req, res) {
  const response = await fetch(
    "https://security-social-helpers.herokuapp.com/getShift",
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
}
