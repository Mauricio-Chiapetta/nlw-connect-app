'use client'
import { IconButton } from '@/components/Icon-button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { Link, Copy } from 'lucide-react'
interface InviteLinkInputProps {
  inviteLink: string
}
export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
    alert('link copiado!')
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField defaultValue={inviteLink} readOnly />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
