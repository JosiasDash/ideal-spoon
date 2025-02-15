const validateFile = (file, allowedTypes = ["image/png", "image/jpeg"], maxSizeMB = 5) => {
    if (!file) return "file";
  
    // Vérifier le type du fichier
    if (!allowedTypes.includes(file.type)) {
      return "format";
    }
  
    // Vérifier la taille (convertir MB en bytes)
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return "size";
    }
  
    return "ok";
};

const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

export {
    validateFile,
    isValidDate,
}
