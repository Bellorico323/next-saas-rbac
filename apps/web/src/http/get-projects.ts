import { api } from './api-client'

interface GetProjectsResponse {
  projects: {
    description: string
    id: string
    name: string
    avatarUrl: string | null
    createdAt: string
    slug: string
    organizationId: string
    ownerId: string
    owner: {
      id: string
      name: string | null
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`)
    .json<GetProjectsResponse>()

  return result
}
