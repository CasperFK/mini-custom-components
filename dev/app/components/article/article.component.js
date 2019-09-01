import { Component } from "../../decorators/components.decoratos";

@Component({
    selector: 'article-component',
    template: require('./article.component.html'),
    style: require('./article.component.scss'),
})
export class ArticleComponent {
    constructor() {
        this.read()
    }

    active() {
    }

    read() {
        this.hello = "Article is Ok"
    }
}