<<<<<<< HEAD
import { expect } from '@playwright/test'
import { test } from '../test-options'

test('drag and drop with iframes', async ({ page, globalsQaURL }) => {
//test('drag and drop with iframes', async ({ page }) => {
        //await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')
    await page.goto(globalsQaURL)
=======
import {test, expect} from '@playwright/test'

test('drag and drop with iframes', async ({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2

    await page.getByLabel('Consent', { exact: true }).click()

    const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')

    await frame.locator('li', {hasText:"High Tatras 2"}).dragTo(frame.locator('#trash'))

    // more precise control (and improving visability in Playwright console)

    await frame.locator('li', {hasText:"High Tatras 4"}).hover()
    await page.mouse.down()
    await frame.locator('#trash').hover()
    await page.mouse.up()

    await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2", "High Tatras 4"])
})