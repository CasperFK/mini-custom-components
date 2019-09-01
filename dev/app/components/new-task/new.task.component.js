import { Component } from "../../decorators/components.decoratos";

@Component({
    selector: 'new-task',
    template: require('./new.task.component.html'),
    style: require('./new.task.component.scss')
})
export class NewTaskComponent {
    constructor () {
        this.read()
    }
    active () {
        let show = false
        document.querySelector('#btnNewTaskBack').addEventListener('click', () => {
            if (show) {
                show = true
                document.querySelector('new-task').style.display = 'block'
                document.querySelector('navbar-component').style.display = 'none'
            } else {
                show = false
                document.querySelector('new-task').style.display = 'none'
                document.querySelector('navbar-component').style.display = 'block'
            }
        })
    }

    read() {
    }
}