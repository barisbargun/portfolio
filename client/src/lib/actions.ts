import axios from "./axios";

export const sendMessage = async ({ name, email, message, recaptcha }: IForm) => {
  return await axios.post(
    "",
    JSON.stringify({ name, email, message }),
    { headers: { "x-recaptcha-token": recaptcha } });
}