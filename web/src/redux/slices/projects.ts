import {createSlice, Slice} from '@reduxjs/toolkit'

export interface IProject {
    id: string,
    name: string,
    description: string,
    language: string,
    license: {
        spdx_id: string,
    },
    svn_url: string,
    url: string,
    fork: boolean,
}

export interface IProjectReducer {
    projects: IProject[]
}

const projectsSlice: Slice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        setProjects: (state, action) => state = action.payload
    }
})

export const { setProjects } = projectsSlice.actions
export default projectsSlice.reducer