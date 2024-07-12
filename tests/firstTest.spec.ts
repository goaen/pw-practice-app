import {test} from '@playwright/test';

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

    await page.getByTestId('SignIn').click()

    // await page.getByTitle('IoT Dashboard').click()
})