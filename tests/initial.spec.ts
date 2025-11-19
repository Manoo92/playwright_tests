import { test, expect} from '@playwright/test';
import { Initial } from '../pages/initial.page';

test('getting started should contain table of contents', async({ page }) => {
    const initial = new Initial(page);
    await initial.goto();
    await initial.clickLink();
})