import { createSlice } from "@reduxjs/toolkit";

interface Folder{
    id: number,
    name: string
}

interface FoldersState{
    folders:Folder[]
}

const initialState:FoldersState = {
    folders: []
}

const ProjectSlice = createSlice({

    name: "Folders",

    initialState,

    reducers: {
        setProjects(){},

        addProjects(){},
        removeProject(){},

        changeProject(){},
    }

})

export const { setProjects, addProjects, removeProject, changeProject } = ProjectSlice.actions
export default ProjectSlice.reducer