const sel = require('../data/selectors.json')

function inputValuesNoClick(name, gender, age, storyType){

    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyChoice)[storyType].click();
}

module.exports = inputValuesNoClick;

