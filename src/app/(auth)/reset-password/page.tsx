export const metadata = {
  title: 'Reset Password',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Vamos te ajudar a se reerguer.</h1>
            <p className="text-xl text-gray-600">Digite o endereço de e-mail que você usou ao se inscrever na sua conta, e enviaremos um link por e-mail para redefinir sua senha.</p>
          </div>
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="bg-white border border-gray-300 focus:border-gray-500 rounded py-3 px-4 placeholder-gray-500 w-full text-gray-800" placeholder="Seu email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="px-8 py-3 shadow-lg text-white bg-blue-600 hover:bg-blue-700 w-full">Enviar link de redefinição</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
