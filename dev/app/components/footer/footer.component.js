import { Component, printDataInHTML } from "../../decorators/components.decoratos";

@Component({
    selector: 'footer-component',
    template: require('./footer.component.html'),
    style: require('./footer.component.scss'),
})
export class FooterComponent {
    @printDataInHTML() hello
    constructor() {
        this.read()
        
    }
    active() {
        
    }
    read() {
        this.hello = "Footer is works"
    }
}