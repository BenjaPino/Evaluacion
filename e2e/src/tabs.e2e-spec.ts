import {browser,element,by} from 'protractor'


describe('Mi prueba',()=>{
    //codigo config
    beforeEach(()=>{
        browser.get("/");
    });
    //prueba 1
    it("Tab 1 se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });
    // prueba 2
    it("El usuario puede navegar a la pestaña  tab 3", async()=>{
        await element(by.css("[tab=tab3]")).click();
        await browser.waitForAngularEnabled(false);
        browser.driver.sleep(5000);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 3");
    });
});