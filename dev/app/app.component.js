import { Component } from "./decorators/components.decoratos";

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    style: require('./app.component.scss'),
})
export class AppComponent {
    
    constructor() {
        this.read()
    }

    active() {
    }

    read() {
        this.hello = 'Ok, Work 2'
        
    }
}