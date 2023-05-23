import { FormInput } from "@/shared/ui/FormInput/FormInput";

const LoginPage = () => {
  return (
    <div>
      <FormInput labelText="Введите e-mail" type="email" />
      <FormInput labelText="Введите пароль" type="password" />
    </div>
  );
};

export default LoginPage;
