const { generateText } = require('./util');

// Unit tests
test('Should output name and age', () => {
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

test('Should output empty name and null age', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});