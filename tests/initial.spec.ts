import { test, expect} from '@playwright/test';
import { Initial } from '../pages/initial.page';

test('page should navigate AB Testing', async({ page }) => {
    const initial = new Initial(page);
    await initial.goto();
    await initial.clickLink();
})