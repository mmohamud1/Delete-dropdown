function deleteOption(index) {
    // Remove the option from the dropdown
    const dropdownOptions = document.getElementById('dropdownOptions');
    dropdownOptions.removeChild(dropdownOptions.children[index]);
}
