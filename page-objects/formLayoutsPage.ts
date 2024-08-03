import { Page } from '@playwright/test'
import { HelperBase } from './helperBase'

export class FormLayoutsPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    /**
     * 
     * @param email 
     * @param password 
     * @param optionText 
     */
    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name: 'Email'}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: 'Password'}).fill(password)
        await usingTheGridForm.getByRole('radio', { name: optionText}).check({force : true})
        await usingTheGridForm.getByRole('button').click()
    }

    /**
     * This method submits an inline form with a name, email and a checkbox
     * @param name 
     * @param email 
     * @param rememberMe 
     */
    async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
        const usingTheInlineForm = this.page.locator('nb-card', {hasText: "Inline form"})
        await usingTheInlineForm.getByRole('textbox', {name: 'Jane Doe'}).fill(name)
        await usingTheInlineForm.getByRole('textbox', {name: 'Email'}).fill(email)
        if (rememberMe) {
            await usingTheInlineForm.getByRole('checkbox').check({force: true})
        }
        await usingTheInlineForm.getByRole('button').click()
    }
}