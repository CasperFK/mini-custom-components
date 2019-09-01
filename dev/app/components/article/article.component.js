import { Component } from "../../decorators/components.decoratos";
import { App } from "../../../main";

@Component({
    selector: 'article-component',
    template: require('./article.component.html'),
    style: require('./article.component.scss'),
})
export class ArticleComponent {
    $$article 
    constructor() {
        this.read()
    }

    active() {
    }

    read() {
        this.$hello = "Article is Ok"
    }
}