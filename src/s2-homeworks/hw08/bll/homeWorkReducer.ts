import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state]
            action.payload === 'up' ? newState.sort((a, b) => a.name.localeCompare(b.name)) : newState.sort((a, b) => b.name.localeCompare(a.name))
            return newState // need to fix
        }
        case 'check': {
            return state.filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
