import * as Yup from "yup";

export const SignupSchema = Yup.object({
  username: Yup.string().min(2).max(12).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(2).max(12).required(),
});
