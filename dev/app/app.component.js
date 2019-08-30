import { Component, printDataInHTML } from "./decorators/components.decoratos";

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    style: require('./app.component.scss'),
    id: 'appRoot',
})
export class AppComponent {
    @printDataInHTML() hello
    constructor() {
        this.read()
    }
    active() {

    }
    read() {
        this.hello = 'Ok, Work'
    }
}