import {expect, type Locator, type Page} from '@playwright/test';

export class Initial {
    readonly page: Page;
    readonly getStartedLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('#content > ul > li:nth-child(1) > a', {hasText: 'A/B Testing'});
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async clickLink(){
        await this.getStartedLink.click();
    }
}