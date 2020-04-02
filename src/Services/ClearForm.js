const ClearForm = () => {
    document.getElementById("addNew").removeAttribute("hidden");
    document.getElementById("update").setAttribute("hidden", true);
}

export default ClearForm;