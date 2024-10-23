export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form action="">
        <header>
          <h1>Identifique-se</h1>
          <p>Informe seu e-mail e senha para continuar</p>
        </header>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Senha:</label>
          <input type="password" name="password" />
        </div>
        <div className="flex justify-end">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}
