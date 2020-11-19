const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')


describe('My Little Hero', function () {

    describe('Labels are present and correct', function () {

        describe('Getting to the page', function () {

            it('TC-000 Title is correct ', function () {
                browser.url('https://qa-apps.netlify.app/app_my_hero');
                let title = browser.getTitle();
                expect(title).toEqual(exp.title);
            });

            it('TC-001 header is present', function () {
                browser.url('');
                const header = $(sel.header1).isDisplayed();
                expect(header).toEqual(true);
            });

            it('TC-002 header is correct', function () {
                const header = $(sel.header1).getText();
                expect(header).toEqual(exp.headerText);
            });

            it('TC-003 text is present', function () {
                const text = $(sel.paragraph).isDisplayed();
                expect(text).toEqual(true);
            });

            it('TC-004 text is correct', function () {
                const text = $(sel.paragraph).getText();
                expect(text).toEqual(exp.labelParagraph);
            });

            it('TC-005 name question label is present', function () {
                const label = $$(sel.label)[0].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-006 name question is correct', function () {
                const label = $$(sel.label)[0].getText();
                expect(label).toEqual(exp.labelName);
            });

            it('TC-007 name placeholder is present', function () {
                const placeholder = $(sel.name).isDisplayed();
                expect(placeholder).toEqual(true);
            });

            it('TC-008 name placeholder is correct', function () {
                const placeholder = $(sel.name).getAttribute('placeholder')
                expect(placeholder).toEqual(exp.placeholderName);
            });

        });

        describe('Field is present, question is correct, placeholder is correct', function () {

            it('TC-009 gender question label is present', function () {
                const label = $$(sel.label)[1].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-010 gender question is correct', function () {
                const label = $$(sel.label)[1].getText();
                expect(label).toEqual(exp.labelGender);
            });

            it('TC-011 gender related to he radio buttons are present', function () {
                const he = $$(sel.gender)[0].isDisplayed();
                expect(he).toEqual(true);
            });

            it('TC-012 gender related to she radio buttons are present', function () {
                const she = $$(sel.gender)[1].isDisplayed();
                expect(she).toEqual(true);
            });

            it('TC-013 gender related to it radio buttons are present', function () {
                const it = $$(sel.gender)[2].isDisplayed();
                expect(it).toEqual(true);
            });

            it('TC-014 he related label is present', function () {
                const label = $(sel.he).isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-015 she related label is present', function () {
                const label = $(sel.she).isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-016 it related label is present', function () {
                const label = $(sel.it).isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-017 he related label is correct', function () {
                const label = $(sel.he).getText();
                expect(label).toEqual(exp.labelHe);
            });

            it('TC-018 she related label is correct', function () {
                const label = $(sel.she).getText();
                expect(label).toEqual(exp.labelShe);
            });

            it('TC-019 it related label is correct', function () {
                const label = $(sel.it).getText();
                expect(label).toEqual(exp.labelIt);
            });

            it('TC-020 Label for age is present', function () {
                const label = $$(sel.label)[2].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-021 Label for age = 3. How old is your Hero?', function () {
                const text = $$(sel.label)[2].getAttribute('title');
                expect(text).toEqual(exp.labelAge);
            });

            it('TC-022 Age field is present', function () {
                const field = $(sel.age).isDisplayed();
                expect(field).toEqual(true);
            });

            it('TC-023 Age placeholder = Hero\'s age', function () {
                const placeholder = $(sel.age).getAttribute('placeholder');
                expect(placeholder).toEqual(exp.placeholderAge);
            });

            it('TC-024 Label for story is present', function () {
                const label = $$(sel.label)[3].isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-025 Label for story = 4. What type of story would you like to read?', function () {
                const text = $$(sel.label)[3].getAttribute('title');
                expect(text).toEqual(exp.labelStory);
            });

            it('TC-026 Story dropdown field is present', function () {
                const field = $(sel.story).isDisplayed();
                expect(field).toEqual(true);
            });

            it('TC-027 Story placeholder = Type of the story', function () {
                const placeholder = $(sel.storyPlaceholder).getText();
                expect(placeholder).toEqual(exp.placeholderStory);
            });

            it('TC-028 Label for image is present', function () {
                const label = $(sel.labelImage).isDisplayed();
                expect(label).toEqual(true);
            });

            it('TC-029 Label for image = 5. Upload an image (optional)', function () {
                const text = $(sel.labelImage).getText();
                expect(text).toEqual(exp.labelImage);
            });

            it('TC-030 Image upload field is present', function () {
                const field = $(sel.image).isDisplayed();
                expect(field).toEqual(true);
            });

            it('TC-031 Image placeholder = drag and drop your image here or browse', function () {
                const placeholder = $(sel.imagePlaceholder).getText();
                expect(placeholder).toEqual(exp.placeholderImage);
            });

            it('TC-032 Submit button is present', function () {
                const button = $(sel.submit).isDisplayed();
                expect(button).toEqual(true);
            });

            it('TC-033 Submit button = Create!', function () {
                const button = $(sel.submitName).getText();
                expect(button).toEqual(exp.submitName);
            });

        });
    })
});

