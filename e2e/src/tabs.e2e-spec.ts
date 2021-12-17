import {browser,element,by} from 'protractor'


describe('Mi prueba',()=>{
    //codigo config
    beforeEach(()=>{
        browser.get("/home");
    });
    //prueba 1
    it("Home se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("home");
    });
    it("login creado por  correctamente",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("login");
    });
    it("agregar creado por  correctamente",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("agregar");
    });
    it("notfound creado por  correctamente",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("notfound");
    });
    it("recuperar creado por  correctamente",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("recuperar");
    });
    it("registrarusuario creado por  correctamente",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("registrarusuario");
    });
    
    
});