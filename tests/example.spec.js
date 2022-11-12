// @ts-check
const { test, expect } = require('@playwright/test');

test('Login Page', async ({ page }) => {
  await page.goto('http://165.227.124.123/admin/auth/login');
  await page.getByPlaceholder('phone number').click();
  await page.getByPlaceholder('phone number').fill('01000111111');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://165.227.124.123/admin/auth/confirm');
  await page.getByPlaceholder('pass code').click();
  await page.getByPlaceholder('pass code').fill('1234');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await expect(page).toHaveURL('http://165.227.124.123/admin');
  await page.getByRole('menuitem', { name: 'team Users' }).click();
  await page.getByText('Users list').click();
  await expect(page).toHaveURL('http://165.227.124.123/admin/userslist');
  await page.getByRole('button', { name: 'plus New User' }).click();
  await page.getByPlaceholder('User phone number').click();
  await page.getByPlaceholder('User phone number').fill('01103468910');
  await page.getByPlaceholder('User full name').click();
  await page.getByPlaceholder('User full name').fill('sayed test automation');
  await page.getByPlaceholder('User national id').click();
  await page.getByPlaceholder('User national id').fill('12126566222500');
  await page.getByPlaceholder('Select date').click();
  await page.getByRole('row', { name: '27 28 29 30 1 2 3' }).getByText('30').click();
  await page.getByText('Male').click();
  await page.getByText('Male').nth(3).click();
  await page.locator('span:has-text("Agent")').click();
  await page.locator('div:nth-child(10) > div > .ant-select-dropdown > div > .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner > div:nth-child(2) > .ant-select-item-option-content').click();
  await page.getByText('Normal').click();
  await page.getByText('Normal').nth(1).click();
  await page.locator('div:nth-child(8) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
  await page.getByText('البقالة').nth(1).click();
  await page.locator('div:nth-child(9) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
  await page.getByText('كشك').click();
  await page.locator('div:nth-child(10) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
  await page.locator('div:nth-child(8) > .ant-select-item-option-content').click();
  await page.locator('div:nth-child(11) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
  await page.getByText('الحضرة الجديدة').click();
  await page.locator('div:nth-child(12) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
  await page.getByText('Mobile').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page).toHaveURL('http://165.227.124.123/admin/userslist');
});





  



  
