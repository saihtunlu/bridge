export default {

    getProject: (state) => (title) => {
        var project = state.projects.filter((data) => {
            return data.title === title;
        })[0]
        return project;
    },

}