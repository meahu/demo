var webdriver= require('selenium-webdriver'),
   By=webdriver.By,
   until=webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('firefox')

    .build();

driver.get("http://localhost:3000/index/index");
driver.findElement(By.id('thumb')).click();
const _animation=driver.findElement(By.id('animation'));
driver.wait(_animation.isDisplayed(), 10000);
driver.quit();