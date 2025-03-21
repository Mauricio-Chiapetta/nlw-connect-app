import type { ComponentProps } from 'react'

interface inputRootProps extends ComponentProps<'div'> {
  error?: boolean
}
interface inputIconProps extends ComponentProps<'span'> {}
interface inputFieldProps extends ComponentProps<'input'> {}

export function InputRoot({ error = false, ...props }: inputRootProps) {
  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 px-4 rounded-xl flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

export function InputIcon(props: inputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

export function InputField(props: inputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
