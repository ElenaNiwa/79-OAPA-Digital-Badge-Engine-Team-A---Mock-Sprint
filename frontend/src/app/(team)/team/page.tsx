import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getServerSession } from '@/actions/auth.actions'
import { TeamMemberAvatar } from '@/features/team/components/TeamMemberAvatar'

export const metadata: Metadata = {
  title: 'Team | OAPA Badge Engine',
}

type TeamMember = {
  name?: string
  role?: string
  blurb?: string
  photoUrl?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rayne Suaiso',
    role: 'PM',
    blurb: 'This content is currently unavailable',
    photoUrl: '',
  },
  {
    name: 'Elena Niwa',
    role: 'BA',
    blurb: 'This content is currently unavailable',
  },
  {
    name: 'Ran Pang',
    role: 'UX',
    blurb: 'This content is currently unavailable',
  },
  {
    name: 'Shamim Ud Doula Shawon',
    role: 'DEV',
    blurb: 'This content is currently unavailable',
  },
  {
    name: 'Jaidyn Caligiuri',
    role: 'DEV',
    blurb: 'This content is currently unavailable',
  },
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = member.name?.trim() || 'team member'
  const role = member.role?.trim() || 'Team Member'
  const blurb = member.blurb?.trim() || 'This content is currently unavailable'

  return (
    <article className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white px-4 py-3">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-sm font-medium text-zinc-500"
        aria-label={`${name} placeholder avatar`}
      >
        <TeamMemberAvatar
          photoUrl={member.photoUrl}
          name={name}
        />
      </div>

      <div className="min-w-0">
        <h2 className="text-sm font-semibold text-zinc-900">{name}</h2>
        <p className="text-xs font-semibold text-[#2f7d78]">{role}</p>
        <p className="mt-1 text-xs text-zinc-500">{blurb}</p>
      </div>
    </article>
  )
}

export default async function TeamPage() {
  const session = await getServerSession()

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <main className="min-h-screen bg-[#f5f5f4] px-8 py-6">
      <div className="mx-auto max-w-5xl rounded-sm bg-white px-10 py-8">
        <header className="border-b border-zinc-200 pb-4">
          <p className="text-sm font-semibold text-zinc-900">Group 79</p>
        </header>

        <section className="pt-5">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
            Meet the team
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Meet the Team 79 members working on the OAPA Digital Badge Engine.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={`${member.name ?? 'member'}-${index}`}
                member={member}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}