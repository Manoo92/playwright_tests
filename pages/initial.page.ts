import {expect, type Locator, type Page} from '@playwright/test';

export class Initial {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly getHeaderText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('#content > ul > li:nth-child(1) > a', {hasText: 'A/B Testing'});
        this.getHeaderText = page.locator('#content > div > h3', {hasText: 'A/B Test Variation 1'});
    }

    async goto(){
        await this.page.goto('/');
    }

    async clickLink(){
        await this.getStartedLink.click();
        await expect(this.getHeaderText).toBeVisible();
    }
}