const { generateText, checkAndGenerate, getData } = require('./util');
const puppetter = require('puppeteer');

// Unit tests
test('Should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

test('Should output empty name and null age', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

// Integration test
test('Should generate a valid text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

// test('Should create an element with text', async () => {
//     const browser = await puppetter.launch({
//         headless: false,
//         slowMo: 80,
//         args: ['--window-size=1920,1080']
//     });

//     const page = await browser.newPage();
//     await page.goto('http://127.0.0.1:5500/testing/');

//     // Name
//     await page.click('input#name');
//     await page.type('input#name', 'Anna');

//     // Age
//     await page.click('input#age');
//     await page.type('input#age', '28');

//     await page.click('#btnAddUser');

//     const finalText = await page.$eval('.user-item', el => el.textContent);

//     expect(finalText).toBe('Anna (28 years old)');
// }, 10000);

// Async code
test('should have data', () => {
    getData().then(data => {
        expect(data).not.toBeNull();
    });
});