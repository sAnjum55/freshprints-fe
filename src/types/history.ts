import { User } from "./search"

export interface UserSearchHistory {
    searchQuery: string
    userDetails: User | undefined
}