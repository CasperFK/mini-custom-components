import { Component } from "./decorators/components.decoratos";
import { App } from "../main";

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    style: require('./app.component.scss'),
})
export class AppComponent {
    $header = "Nagłówek nr. 2"
    $hello
    
    constructor() {
        this.read()
    }

    active() {
        App.components.AppComponent.header = 'Nagłówek nr.: '
        
    }

    read() {
        this.$hello = 'Ok, Work 2'
    }
}