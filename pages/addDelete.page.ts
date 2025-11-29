import {expect, type Locator, type Page} from '@playwright/test';

export class AddDeletePage{

    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly getHeaderText: Locator;
    readonly getButton: Locator;
    readonly getAddButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.getStartedLink = page.locator('#content > ul > li:nth-child(2) > a', {hasText: 'Add/Remove Elements'});
        this.getHeaderText = page.locator('#content > h3', {hasText: 'Add/Remove Elements'});
        this.getButton = page.locator('#content > div > button');
        this.getAddButton = page.locator('#content > div > button');

    }

    async goto(){
        await this.page.goto('/');
    }

    async getLink(){
        await this.getStartedLink.click();
        await expect(this.getHeaderText).toBeVisible();
    }

    async clickButton(){
        await this.getButton.click();
        // await expect(this.getButton).toBeVisible();
    }

    async clickAddButton(){
        await this.getAddButton.click();
    }
}