export const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const loadNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};
