import { Component } from "../../decorators/components.decoratos";
import { App } from "../../../main";

@Component({
    selector: 'navbar-component',
    template: require('./navbar.component.html'),
    style: require('./navbar.component.scss'),
})
export class NavbarComponent {
    
    $hello = "Navbar is Ok"
    $human = ['Człowiek1', 'Człowiek2']
    $$dom = 'navbar-component'
    
    constructor() {
        this.read()
    }

    active() {
        this.$human = App.components.NavbarComponent.name
    }

    read() {
    }
}