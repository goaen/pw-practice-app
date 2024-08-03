import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()    
})

test('Locator syntax rules', async ({page}) => {
    // by Tag name
    await page.locator('input').first().click()
    
    // by ID
    page.locator('#inputEmail1')
    
    // by Class 
    page.locator('.shape-rectangle')

    // by Attribute
    page.locator('[placeholder="Email"]')

    // by full Class value
    page.locator('[class="input-full-width size-emdium shape-rectangle status-basic nb-transition"]')

    // by combinatiopn of different selectors
    page.locator('input[placeholder="Email"]')

    // by XPath (NOT RECOMMENDED!
    page.locator('//*[@id="inputEmail1"]')

    // by partial Text match
    page.locator(':text=("Using")')

    // by exact Text match
    page.locator(':text-is("Using the Grid")')

})

test('User facing locators', async ({page}) => {
    await page.getByRole('textbox', {name: 'Email'}).first().click()
    await page.getByRole('button', {name: 'Sign in'}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Using the grid').click()

    //await page.getByTestId('SignIn').click()
    await page.getByText('Sign in').first().click()

    // await page.getByTitle('IoT Dashboard').click()
})

test('locating child elements', async ({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()

    // Not recommended
    await page.locator('nb-card').nth(3).click()
})

test('locating parent elements', async ({page}) => {
    await page.locator('nb-card', {hasText: "Using the grid"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).click()

    await page.locator('nb-card', {hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()

    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click()
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click()

    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"}).click()

    // Not recommended (XPath relative)
    await page.locator(':text-is("Using the Grid")').locator('..').click()
})

test('Reusing the locators', async ({page}) => {
    const basicForm = page.locator('nb-card', {hasText: "Basic form"})
    const emailField = basicForm.getByRole('textbox', {name: "Email"})

    await emailField.fill('test@test.com')

    await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
})

test('extracting values', async ({page}) => {
    // single test value
    const basicForm = page.locator('nb-card', {hasText: "Basic form"})
    const buttonText = await basicForm.locator('button').textContent()
    expect (buttonText).toEqual('Submit')

    // all values
    const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonsLabels).toContain("Option 1")

    // input value
    const emailField = await basicForm.getByRole('textbox', {name: "Email"})
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')

    // attribute value
    const emailPlaceholder = await emailField.getAttribute('placeholder')
    expect(emailPlaceholder).toEqual('Email')
})

test('assertions', async ({page}) => {
    const basicFormButton = page.locator('nb-card', {hasText: "Basic form"}).locator('button')
    const text = await basicFormButton.textContent()
    expect(text).toEqual('Submit')

    // Locator assertions (always waits! (5 seconds))
    await expect(basicFormButton).toHaveText('Submit')

    // Soft assertions (not considered good practice)
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()       // Continues after timeout
})