import LoginForm from "@/components/forms/loginForm";

export default function Home() {
  return (
    <div className="container flex justify-center items-center mx-auto text-center md:grid md:grid-cols-2 min-h-screen">
      <h1 className="text-primary">hola</h1>
      
      <LoginForm/>
    </div>
  );
}
