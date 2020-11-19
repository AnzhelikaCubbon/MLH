const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValuesNoClick = require('../../helpers/inputValues4.js');
const inputValues4Click = require('../../helpers/inputValues4Click.js');
const path = require('path');

describe('Story to read', function () {

    describe('Image', function () {

        it('TC-209 Uploaded jpeg image is available on the story page', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero#');
            inputValuesNoClick(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const filePath = path.join(__dirname, '../../data/Masha.jpeg')
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.pictureAddHidden).waitForDisplayed();
            $(sel.pictureAddHidden).setValue(remoteFilePath);
            $(sel.submit).click();
            const picture = $(sel.pictureFinal)
            const result = (picture === sel.errorPicture);
            browser.pause(3000);
            expect(result).toEqual(false);
        });

        it('TC-210 Uploaded png image is available on the story page', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero#');
            inputValuesNoClick(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const filePath = path.join(__dirname, '../../data/Masha.png')
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            $(sel.pictureAddHidden).waitForDisplayed();
            $(sel.pictureAddHidden).setValue(remoteFilePath);
            $(sel.submit).click();
            const picture = $(sel.pictureFinal)
            const result = (picture === sel.errorPicture);
            browser.pause(3000);
            expect(result).toEqual(false);
        });
    });

    describe('Inputs are correct', function () {

        it('TC-211 Chosen character\'s name is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.name);
        });

        it('TC-054 Pronoun "he" is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.he, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.heStory);
        });

        it('TC-055 Pronoun "his" is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.he, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.hisStory);
        });

        it('TC-056 Pronoun "she" is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.sheStory);
        });

        it('TC-057 Pronoun "her" is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.herStory);
        });

        it('TC-058 Pronoun "it" is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.it, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.itStory);
        });

        it('TC-059 Pronoun "its" is correctly shown in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.it, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.itsStory);
        });

        it('TC-212 Title for Comedy is included in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.it, data.age123, data.storyType.comedy);
            const header = $(sel.storyHeader);
            expect(header).toHaveTextContaining(data.comedyTitle);
        });

        it('TC-219 Type of story  is Comedy', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.it, data.age123, data.storyType.comedy);
            const text = $$(sel.text)[0];
            expect(text).toHaveTextContaining(data.comedy);
        });

        it('TC-226 Moral for Comedy is included in the story', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.it, data.age123, data.storyType.comedy);
            const moral = $$(sel.text)[1];
            expect(moral).toHaveTextContaining(data.comedyMoral);
        });
    });

    describe('Try again button', function () {

        it('TC-234 "Try again!" button exists', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-235 "Try again!" button is correct', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.she, data.age123, data.storyType.comedy);
            const btn = $(sel.tryAgain);
            expect(btn).toHaveTextContaining(data.tryAgain)
        });

        it('TC-236 "Try again!" button directs to the main page ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4Click(data.name, data.gender.she, data.age123, data.storyType.comedy);
            $(sel.tryAgain).click();
            const header = $(sel.header).getText();
            expect(header).toEqual(exp.headerText);
        });
    });
});
