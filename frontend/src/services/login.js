import axios from "axios";
import formValidator from "../lib/validator";
// <>

const host = import.meta.env.VITE_API_HOST;
const loginPath = import.meta.env.VITE_API_LOGIN;

function login(form, validationSchema, setLoading, setData) {
    let error = formValidator(form, validationSchema);
    if (Object.keys(error).length > 0 ) {
        setData({validationError: error});
        return;
    }
    setLoading(true);
    axios.post(host + loginPath, form)
    .then(function(response) {
        setData(response.data);
    })
    .catch(function(error) {
        setData({
            error: error.response ? error.response.data : "An unexpected error occured"
        });
    })
    .finally(function() {
        setLoading(false);
    })
}

export default login;
