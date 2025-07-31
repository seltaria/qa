// import { expect, Locator, Page } from '@playwright/test';
// import { BasePage } from './BasePage';

// export class MainPage extends BasePage {
//   private readonly headerLocator: Locator;
//   private readonly categoryTabsLocator: Locator;
//   private readonly menuLocator: Locator;
//   private readonly headerAddButtonLocator: Locator;
//   private readonly headerNotificationButtonLocator: Locator;
//   private readonly headerLoginButtonLocator: Locator;
//   private readonly headerAddListLocator: Locator;
//   private readonly notificationPopupLocator: Locator;
//   private readonly authorizationModalLocator: Locator;

//   constructor(page: Page) {
//     super(page);

//     this.headerLocator = this.page.getByText('RUTUBEДобавитьУведомленияПереключить на светлую темуВход и регистрация');
//     this.categoryTabsLocator = this.page.locator('main div').filter({ hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ' }).nth(1);
//     this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
//     this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
//     this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
//     this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
//     this.headerAddListLocator = this.page.locator('.wdp-header-right-module__uploader ul');
//     this.notificationPopupLocator = this.page.locator('.wdp-notifications-popup-module__wrapper');
//     this.authorizationModalLocator = this.page.locator('div[role="form"]');
//   }

//   // ACTIONS
  
//   async open() {
//     await this.page.goto('https://rutube.ru/');
//   }

//   async openAddPopupList() {
//     await this.headerAddButtonLocator.click();
//   }

//   async openNotifications() {
//     await this.headerNotificationButtonLocator.click();
//   }

//   async openLoginModal() {
//     await this.headerLoginButtonLocator.click();
//   }

//   // ASSERTIONS

//   async addPopupHasCorrectAriaSnapshot() {
//     await this.checkAriaSnapshot(this.headerAddListLocator, 'addPopupAriaSnapshot');
//   }
  
//   async notificationsHasCorrectAriaSnapshot() {
//     await this.checkAriaSnapshot(this.notificationPopupLocator, 'notificationsAriaSnapshot');
//   }
  
//   async loginPopupHasCorrectAriaSnapshot() {
//     await this.checkAriaSnapshot(this.authorizationModalLocator, 'loginPopupAriaSnapshot');
//   }
  
//   async headerHasCorrectAriaSnapshot() {
//     await this.checkAriaSnapshot(this.headerLocator, 'headerAriaShapshot');
//   }
    
//   async categoryTabsHasCorrectAriaSnapshot() {
//     await this.checkAriaSnapshot(this.categoryTabsLocator, 'categoryTabsAriaShapshot');
//   }
  
//   async menuHasCorrectAriaSnapshot() {
//     await this.checkAriaSnapshot(this.menuLocator, 'menuAriaShapshot');
//   }
// }