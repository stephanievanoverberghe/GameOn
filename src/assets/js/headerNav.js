const toggleNav = () => {
    let header = document.querySelector('#headerNav');
    if (header.className === "header") {
        header.className += " responsive";
    } else {
        header.className = "header";
    }
}