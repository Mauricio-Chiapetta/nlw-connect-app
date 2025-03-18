'use client'
import { Button } from '@/components/Button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { User, Mail, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { subscribeToEvent } from '@/http/api'
import { useRouter, useSearchParams } from 'next/navigation'
// validação de formulário usando zod
// name : string -> no mínimo 2 caracteres e uma mensagem de erro
// email : string -> email  e (mensagem de erro)
const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo!'),
  email: z.string().email('Digite um email válido!'),
})
// tipando o useForm
type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  // utilizando react hook form para validar formulario

  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionSchema) {

    const referrer = searchParams.get('referrer')
     const { subscriberId } = await subscribeToEvent({ name, email, referrer })
 
     router.push(`/invite/${subscriberId}`)

  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="text-gray-200 font-heading font-semibold text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
          </InputRoot>
          {/* se tiver erro no formState:{errors} mostrar a mensagem de erro abaixo do input*/}
          {errors.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="Email"
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
