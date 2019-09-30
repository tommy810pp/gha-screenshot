import screenshot from '../src/screenshot'
test('screenshot', async () => {
    await screenshot("./test.html", "test");
})