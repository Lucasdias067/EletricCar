'use client'
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const createUserSignUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Nome é obrigatório' })
    .refine((name) => name.trim().length > 0, 'O nome é obrigatário')
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ')
    ),
  email: z
    .string()
    .email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(1, { message: 'Senha é obrigatória' })
    .transform((password) => password.trim())
})

type TCreateUserSignUp = z.infer<typeof createUserSignUpSchema>

export default function SignUp() {

  const createUserSignUp = useForm<TCreateUserSignUp>({
    resolver: zodResolver(createUserSignUpSchema)
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = createUserSignUp;

  function createUsers(data: TCreateUserSignUp) {
    console.log(data)
    router.push('/');
  }

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <FormProvider {...createUserSignUp}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tighter">Bem vindo!</h1>
            </div>
            <div className="max-w-sm mx-auto">
              <form onSubmit={handleSubmit(createUsers)}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nome <span className="text-red-600">*</span></label>
                    <input {...register('name')} id="name" type="text" className="bg-white border border-gray-300 focus:border-gray-500 rounded py-3 px-4 placeholder-gray-500 w-full text-gray-800" placeholder="Seu nome" />
                    {errors.name && <p className="text-red-500 text-xs italic">Nome é obrigatório</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input {...register('email')} id="email" type="email" className="bg-white border border-gray-300 focus:border-gray-500 rounded py-3 px-4 placeholder-gray-500 w-full text-gray-800" placeholder="Seu email" />
                    {errors.email && <p className="text-red-500 text-xs italic">Email é obrigatório</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Senha <span className="text-red-600">*</span></label>
                    <input {...register('password')} id="password" type="password" className="bg-white border border-gray-300 focus:border-gray-500 rounded py-3 px-4 placeholder-gray-500 w-full text-gray-800" placeholder="Sua senha" />
                    {errors.password && <p className="text-red-500 text-xs italic">Senha é obrigatória</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="px-8 py-3 shadow-lg text-white relative flex items-center justify-center bg-blue-600 hover:bg-blue-700 w-full">
                      Entrar
                    </button>
                  </div>
                </div>
                <div className="text-sm text-gray-500 text-center mt-3">
                  Ao criar a conta, você concorda com... <a className="underline" href="#0">termos & condições</a>, e nossa <a className="underline" href="#0">politíca de privacidade</a>.
                </div>
              </form>
              <div className="flex items-center my-6">
                <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
                <div className="text-gray-600 italic">Ou</div>
                <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
              </div>
              <form>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <button className="px-8 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                      <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                      </svg>
                      <span className="flex-auto pl-16 pr-8 -ml-16">Continue com GitHub</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <button className="px-8 py-3 shadow-lg text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                      <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                      </svg>
                      <span className="flex-auto pl-16 pr-8 -ml-16">Continue com Google</span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-gray-600 text-center mt-6">
                Já tem conta? <Link href="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </section>
  )
}
