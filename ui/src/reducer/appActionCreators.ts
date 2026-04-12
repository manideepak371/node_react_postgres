import { ActionTypes } from "./reducer"

export const updateName = (payload: any) => {
    return {
        type: ActionTypes.UPDATE_NAME,
        payload
    }
}