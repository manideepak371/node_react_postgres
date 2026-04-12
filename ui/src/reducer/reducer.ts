import { createAction, createReducer } from "@reduxjs/toolkit"
import { useReducer } from "react";

export const initialState = {
    name: ""
}

export const ActionTypes = {
    UPDATE_NAME: "update_name"
}

export const Actions = {
    updateName: createAction(ActionTypes.UPDATE_NAME)
}

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.updateName, (state, action) => {
        state.name = action.payload || "";
    })
})
