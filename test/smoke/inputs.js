const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')
const inp = require('../../data/inputs.json')

describe('My Little Hero', function () {

    describe('Name field inputs', function () {

        it('TC-034 Name field accepts letters', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const input = $(sel.name).setValue(inp.nameLetters);
            const value = $(sel.name).getValue();
            expect(value).toEqual(inp.nameLetters);
        });

        it('TC-035 Name field accepts digits', function () {
            browser.url('');
            const input = $(sel.name).setValue(inp.nameDigits);
            const value = $(sel.name).getValue();
            expect(value).toEqual(inp.nameDigits);
        });

        it('TC-036 Name field accepts special characters', function () {
            browser.url('');
            const input = $(sel.name).setValue(inp.nameSpecChar);
            const value = $(sel.name).getValue();
            expect(value).toEqual(inp.nameSpecChar);
        });

    });

    describe('Gender field inputs', function () {

        it('TC-042 Radio button he is active', function () {
            browser.url('');
            const button = $$(sel.gender)[0].isClickable();
            expect(button).toEqual(true);
        });

        it('TC-043 Radio button she is active', function () {
            const button = $$(sel.gender)[1].isClickable();
            expect(button).toEqual(true);
        });

        it('TC-044 Radio button it is active', function () {
            const button = $$(sel.gender)[2].isClickable();
            expect(button).toEqual(true);
        });

    });

    describe('Age field inputs', function () {

        it('TC-046 Age field accept digits', function () {
            browser.url('');
            const input = $(sel.age).setValue(inp.ageDigits);
            const value = $(sel.age).getValue();
            expect(value).toEqual(inp.ageDigits);
        });

        it('TC-052 After the first click + => spinner value becomes 1', function () {
            browser.url('');
            const input = $(sel.spinUp).click();
            const value = $(sel.age).getValue();
            expect(value).toEqual(exp.spinExpVal);
        });

        it('TC-053 When number >= 2 => spinner can decrease number by 1', function () {
            browser.url('');
            $(sel.age).setValue(inp.spinInpVal);
            const input = $(sel.spinDown).click();
            const value = $(sel.age).getValue();
            expect(value).toEqual(exp.spinExpVal);

        });

    });

});
