import { Component, printDataInHTML } from "../../decorators/components.decoratos";

@Component({
    selector: 'navbar-component',
    template: require('./navbar.component.html'),
    style: require('./navbar.component.scss'),
    id: 'navbarComponent',
})
export class NavbarComponent {
    @printDataInHTML() hello
    constructor() {
        this.read()
    }
    active() {

    }
    read() {
        this.hello = "Navbar is Ok"
    }
}