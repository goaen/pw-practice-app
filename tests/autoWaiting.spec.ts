import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')
    // await successButton.click()
    
    // Uses timeout
    // const text = await successButton.textContent()
    // expect(text).toEqual('Data loaded with AJAX get request.')

    // No timeout on allTextContents, will therefore continue immediately (and fail)
    // const text = await successButton.allTextContents()
    // expect(text).toEqual('Data loaded with AJAX get request.')
    
    // Fix for timeout on allTextContents
    // await successButton.waitFor({state: 'attached'})
    // const text = await successButton.allTextContents() // Add this
    // expect(text).toContain('Data loaded with AJAX get request.')

    // Fix for timeout on allTextContents
    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
    // const text = await successButton.allTextContents() // Add this
    // expect(text).toContain('Data loaded with AJAX get request.')

})

test('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    // Wait for element
    // await page.waitForSelector('.bg-success')

    // Wait for particular response
    // await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    // Wait for network to be completed (NOT RECOMMENDED!)
    await page.waitForLoadState('networkidle')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeouts', async ({page}) => {
    const successButton = page.locator('.bg-success')
    await successButton.click()

})