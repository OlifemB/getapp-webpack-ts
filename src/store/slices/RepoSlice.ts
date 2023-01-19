import {createSlice} from "@reduxjs/toolkit";
import {getCurrentRepo, getRepos} from "@store/actions/RepoActions";
import {RepoProps} from "@models/Repo";

export interface RepoState {
    items: RepoProps[]
    isFetching: boolean,
    isFetchError: boolean,
    currentPage: number,
    perPage: number,
    totalCount: number,
}

const initialState: RepoState = {
    items: [],
    isFetching: true,
    isFetchError: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
}


const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [getRepos.pending.type]: (state) => {
            state.isFetching = true
            state.isFetchError = false
        },
        [getRepos.fulfilled.type]: (state, action: any) => {
            state.isFetching = false
            state.totalCount = action.payload.total_count
            state.items = action.payload.items
        },
        [getRepos.rejected.type]: (state) => {
            state.isFetching = true
            state.isFetchError = true
        },
        [getCurrentRepo.pending.type]: (state) => {
            state.isFetching = true
            state.isFetchError = false
        },
        [getCurrentRepo.fulfilled.type]: (state) => {
            state.isFetching = false
        },
        [getCurrentRepo.rejected.type]: (state) => {
            state.isFetching = true
            state.isFetchError = true
        }
    }
})
export const {setCurrentPage} = reposSlice.actions
export const reposReducer = reposSlice.reducer