import AppDispatcher from "./AppDispatcher";
import emailConstants from "./constants";

const AppAction = {
    createEmail(email) {
        AppDispatcher.dispatch({
            type: emailConstants.CREATE_EMAIL,
            email: email
        })
    },

    deleteEmail(no) {
        AppDispatcher.dispatch({
            type: emailConstants.DELETE_EMAIL,
            no: no
        })
    }
}

export default AppAction;