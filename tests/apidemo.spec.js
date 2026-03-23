
import { test, expect } from '@playwright/test';

test.skip(process.env.CI, 'Skipping API test in CI');

test('Get user API', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');

  expect(response.status()).toBe(200);
});