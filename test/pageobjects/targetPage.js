export default class TargetPage {
  async navigateToHomePage() {
    await browser.url('https://www.target.com/');
    await $('#search').waitForExist({ timeout: 10000 });
  }
  async scrollToBottom() {
  await browser.execute(() => window.scrollTo(0, document.body.scrollHeight));
}
}
