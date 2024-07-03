function sectionPicker() {
    const sectionRandom = Math.floor(Math.random() * 2);

    if (sectionRandom == 0) {
        document.getElementById('result').innerHTML = 'You are: Euclid!';
    }

    else {
        document.getElementById('result').innerHTML = 'You are: Einstein!';
    }
}