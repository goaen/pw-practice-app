import {test, expect} from '@playwright/test';
<<<<<<< HEAD
// import { NavigationPage } from '../page-objects/navigationPage';
// import { FormLayoutsPage } from '../page-objects/formLayoutsPage';
// import { DatePickerPage } from '../page-objects/datePickerPage';
import { PageManager } from '../page-objects/pageManager';
import { faker } from '@faker-js/faker';
=======
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutsPage } from '../page-objects/formLayoutsPage';
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200')
})

<<<<<<< HEAD
test('navigate to form page', {tag: ['@smoke', '@regression']}, async({page}) => {
    const pm = new PageManager(page)
    // const navigateTo = new NavigationPage(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parameterized methods @smoke', async({page}) => {
    const pm = new PageManager(page)

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    // await page.screenshot({ path: 'screenshots/formsLayoutPage.png' })
    //const buffer = await page.screenshot()
    //console.log(buffer.toString('base64'))

    //await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('Fjatle Kneggstad', 'x@y.z', true)
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)

    // await page.locator('nb-card', { hasText: 'Inline form'}).screenshot({ path: 'screenshots/inlineForm.png' })


    // await pm.navigateTo().datepickerPage()
    // await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
    // await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(10, 15)
})

=======
test('navigate to form page', async({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datepickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('parameterized methods', async({page}) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption('a@b.c', '123456', 'Option 2')
    await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckbox('Fjatle Kneggstad', 'x@y.z', true)

})
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
