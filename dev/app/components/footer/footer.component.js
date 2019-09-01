import { Component, printDataInHTML } from "../../decorators/components.decoratos";
import { App } from "../../../main";

@Component({
    selector: 'footer-component',
    template: require('./footer.component.html'),
    style: require('./footer.component.scss')
})
export class FooterComponent {
    $$footer
    $domek = 'Domek'
    $lepiej
    constructor() {
        this.read()
        
    }
    active() {
        document.querySelector('#btn2').addEventListener('click', () => {
            console.log(App.components.NavbarComponent.property.human)
        })
    }
    read() {
        this.$hello = "Footer is works"
        this.$lepiej = "Lepiej" // this.lepiej !== this.$lepiej
        
        
    }
}