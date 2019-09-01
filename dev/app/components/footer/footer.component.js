import { Component, printDataInHTML } from "../../decorators/components.decoratos";
import { App } from "../../../main";

@Component({
    selector: 'footer-component',
    template: require('./footer.component.html'),
    style: require('./footer.component.scss')
})
export class FooterComponent {
    $footer = 'footer-component'
    $domek
    $lepiej
    constructor() {
        this.read()
        
    }
    active() {
        App.components.FooterComponent = {
            $footer: this.$footer,
            $domek: this.$domek,
            lepiej: this.lepiej
        }
    }
    read() {
        this.hello = "Footer is works"
        this.lepiej = "Lepiej" // this.lepiej !== this.$lepiej
        window.addEventListener('load', () => {
            App.components.FooterComponent.$domek = 'FooterComponent'
            this.domek = App.components.FooterComponent.$domek
            this.$domek = App.components.FooterComponent.$domek
        document.querySelector('#btn').addEventListener('click', () => {
            console.log('FooterComponent ' + App.components.FooterComponent.$footer)
            console.log(this.$domek)
           
        })
       
    })
    }
}