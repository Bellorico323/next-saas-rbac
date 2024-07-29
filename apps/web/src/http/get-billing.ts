import { api } from './api-client'

interface GetBillingResponse {
  organization: {
    id: string
    slug: string
    name: string
    domain: string | null
    shouldAttachUsersByDomain: boolean
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    ownerId: string
  }
}

export async function getBilling(org: string) {
  const result = await api
    .get(`organizations/${org}`)
    .json<GetBillingResponse>()

  return result
}
