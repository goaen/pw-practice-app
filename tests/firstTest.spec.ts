import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('Charts', () => {
    test.beforeEach(async ({page}) => {
        // await page.getByText('Charts').click()
        await page.getByText('Charts',{exact:true}).click()
    })
    test('Find and click Echart', async ({page}) => {
        //await page.getByText('Echarts',{exact:true}).click()  
        await page.getByText('Echarts', {exact:true}).click()  
    })
    test.skip('Click to disable France', async ({page}) => {
        await page.getByText('France', {exact:true}).click()  
    })

    /*
    test('Switch to dark mode', async ({page}) => {
        await page.getByText('Dark').click()  
    })
    */
})

test.describe('Forms', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
    })
    test('Find and click Form Layouts', async ({page}) => {
        await page.getByText('Form Layouts').click()  
    })
    
    test('Find and click Datepicker', async ({page}) => {
        await page.getByText('Datepicker').click()  
    })
})
