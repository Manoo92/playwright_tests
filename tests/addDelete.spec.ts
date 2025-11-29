import {expect, test} from '@playwright/test';
import { AddDeletePage } from '../pages/addDelete.page';

test('page should navigate to addDelete button', async ({ page }) => {
    const addDelete = new AddDeletePage(page);
  
    await test.step('Navigate to Add/Delete page', async () => {
      await addDelete.goto();
  
      await test.info().attach('Screenshot - goto', {
        body: await page.screenshot(),
        contentType: 'image/png'
      });
    });
  
    await test.step('Open the link', async () => {
      await addDelete.getLink();
  
      await test.info().attach('Screenshot - getLink', {
        body: await page.screenshot(),
        contentType: 'image/png'
      });
    });
  
    await test.step('Click main button', async () => {
      await addDelete.clickButton();
  
      await test.info().attach('Screenshot - clickButton', {
        body: await page.screenshot(),
        contentType: 'image/png'
      });
    });
  
    await test.step('Click Add button', async () => {
      await addDelete.clickAddButton();
  
      await test.info().attach('Screenshot - clickAddButton', {
        body: await page.screenshot(),
        contentType: 'image/png'
      });
    });
  });
  