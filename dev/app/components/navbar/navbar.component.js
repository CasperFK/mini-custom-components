import { Component } from "../../decorators/components.decoratos";
import { App } from "../../../main";

@Component({
    selector: 'navbar-component',
    template: require('./navbar.component.html'),
    style: require('./navbar.component.scss'),
})
export class NavbarComponent {
    
    $menu = 'Menu'
    
    constructor() {
        this.read()
    }

    active() {
        let show = false
            document.querySelector('#newTask').addEventListener('click', () => {
                if(show) {
                    show = false
                    document.querySelector('navbar-component').style.display = 'block'
                    document.querySelector('new-task').style.display = 'none'
                } else {
                    show = true
                    document.querySelector('navbar-component').style.display = 'none'
                    document.querySelector('new-task').style.display = 'block'
                }
            })
    }

    read() {
    }
}