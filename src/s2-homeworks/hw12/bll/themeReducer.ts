export const initState:initStateType = {
    themeId: 1,
}

export const themeReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)
export type ActionType = ReturnType<typeof changeThemeId>
export type initStateType = {
    themeId: number
}
// fix any
