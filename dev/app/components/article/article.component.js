import { Component, printDataInHTML } from "../../decorators/components.decoratos";

@Component({
    selector: 'article-component',
    template: require('./article.component.html'),
    style: require('./article.component.scss'),
    id: 'articleComponent',
})
export class ArticleComponent {
    @printDataInHTML() hello
    constructor() {
        this.read()
    }
    active() {

    }
    read() {
        this.hello = "Article is Ok"
    }
}