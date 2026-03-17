import { test, expect } from '@playwright/test';

test('Get user API', async ({ request }) => {

const response = await request.get(
'https://fakestoreapi.com/products/19'
);

expect(response.status()).toBe(200);

const body = await response.json();

console.log(body);

});