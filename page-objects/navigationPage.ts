import { Locator, Page } from "@playwright/test";
<<<<<<< HEAD
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {

    // Not recommended by instructor:
    /*
=======

export class NavigationPage {

    readonly page: Page

    // Not recommended by instructor:
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    readonly formLayoutsMenuItem: Locator
    readonly datepickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator
<<<<<<< HEAD
    */

    constructor(page: Page) {
        super(page)
        //this.page = page

        /*
=======

    constructor(page: Page) {
        this.page = page
        
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
        this.formLayoutsMenuItem = this.page.getByText('Form Layouts')
        this.datepickerMenuItem = this.page.getByText('Datepicker')
        this.smartTableMenuItem = this.page.getByText('Smart Table')
        this.toastrMenuItem = this.page.getByText('Toastr')
        this.tooltipMenuItem = this.page.getByText('Tooltip')
<<<<<<< HEAD
        */
=======
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
<<<<<<< HEAD
        await this.page.getByText('Form Layouts').click()
        await this.waitForNumberOfSeconds(2)
=======
        await this.formLayoutsMenuItem.click()
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    }

    async datepickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.page.waitForTimeout(1000)
<<<<<<< HEAD
        await this.page.getByText('Datepicker').click()
=======
        await this.datepickerMenuItem.click()
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.waitForTimeout(1000)
<<<<<<< HEAD
        await this.page.getByText('Smart Table').click()
=======
        await this.smartTableMenuItem.click()
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    }

    async toastrPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.waitForTimeout(1000)
<<<<<<< HEAD
        await this.page.getByText('Toastr').click()
=======
        await this.toastrMenuItem.click()
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.waitForTimeout(1000)
<<<<<<< HEAD
        await this.page.getByText('Tooltip').click()
=======
        await this.tooltipMenuItem.click()
>>>>>>> 3d34f4ce3ed9a6f4ecca6fc255df12243c2b5fa2
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == 'false') {
            await groupMenuItem.click()
        }
    }

}