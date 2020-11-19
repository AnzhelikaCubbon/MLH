const sel = require('../data/selectors.json')

function inputValues4Click(name, gender, age, storyType){

    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyChoice)[storyType].click();
    $(sel.create).click();
}

module.exports = inputValues4Click;