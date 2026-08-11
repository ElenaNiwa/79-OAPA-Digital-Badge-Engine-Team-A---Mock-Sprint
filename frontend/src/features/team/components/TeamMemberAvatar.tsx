'use client'

import { useState } from 'react'

type TeamMemberAvatarProps = {
  photoUrl?: string
  name: string
}

export function TeamMemberAvatar({
  photoUrl,
  name,
}: TeamMemberAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false)

  if (!photoUrl || imageFailed) {
    return (
      <div
        className="h-11 w-11 shrink-0 rounded-full bg-[#e3e1dc]"
        role="img"
        aria-label={`Placeholder avatar for ${name}`}
      />
    )
  }

  return (
    // Plain img is intentional here so arbitrary hard-coded team photo URLs
    // can fall back cleanly without requiring Next.js remote image configuration.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUrl}
      alt={`${name} profile`}
      className="h-11 w-11 shrink-0 rounded-full object-cover"
      onError={() => setImageFailed(true)}
    />
  )
}