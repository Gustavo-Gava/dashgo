import { useQuery } from "react-query"
import { User } from "../../../types/users/User"
import { api } from "../../api"

export async function getUsers(): Promise<User[]> {
  const {data} = await api.get("/users")
  
  const users = await data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // 5 SECONDS
  })
}