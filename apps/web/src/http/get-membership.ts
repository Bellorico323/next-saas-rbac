import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    organizationId: string
    userId: string
  }
}

export async function GetMembership(slug: string) {
  const result = await api
    .get(`organizations/${slug}/membership`)
    .json<GetMembershipResponse>()

  return result
}
