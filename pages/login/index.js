import AppLayout from "../../components/AppLayout";

export default function Login() {
  return (
    <AppLayout>
      <a className="text-white" href="https://www.epicgames.com/id/authorize?client_id=xyza7891lcopZrtftxZbwoSYrLtQiNNz&response_type=code&scope=basic_profile&redirect_uri=https://egdata.app/login/callback">Iniciar Sesión</a>
    </AppLayout>
  )
}