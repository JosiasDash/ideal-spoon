// <>
import {isValidDate, validateFile} from "../utils/validators"
const validationSchema = {
    username: {
        required: "Le nom est requis",
        minLength: { value: 3, message: "Minimum 3 caractères" },
    },
    email: {
        required: "L'email est requis",
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email invalide" },
    },
    birth: {
        required: "",
        date: "",
    },
    profil: {
        required: "",
        file: {
            formats: [], // Type de fichiers attendu
            maxSizeMB: 3, // Taille maximale de fichier
            formatError: "", // Message d'erreur si le format du fichier est incorrecte
            sizeError: "" // Message d'erreur si la taille du fichier dépasse maxSizeMB
        }
    }
};

function formValidator(values, schema) {
    let errors = {};

    Object.keys(schema).forEach(function(field) {
        const rules = schema[field];

        if (rules.required && !values[field]) {
            errors[field] = rules.required;
            return;
        }
        if (rules.minLength && rules.minLength.value && values[field].length < rules.minLength.value) {
            errors[field] = rules.minLength.message;
            return;
        }
        if (rules.pattern && !rules.pattern.value && !rules.pattern.value.test(values[field])) {
            errors[field] = rules.pattern.message;
            return;
        }
        if (rules.date && !isValidDate(values[field])) {
            errors[field] = rules.date;
            return;
        }
        if (rules.file && validateFile(values[field], rules.file.formats, rules.file.maxSizeMB) != "ok") {
            const res = validateFile(values[field], rules.file.formats, rules.file.maxSizeMB);
            if (res == "format") {
                errors[field] = rules.file.formatError;
            } else if (res == "size") {
                errors[field] = rules.file.sizeError;
            }
            return;
        }
    });

    return errors;
}

export default formValidator;
