import { getComponent } from "./app/decorators/components.decoratos";

import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { AppComponent } from "./app/app.component";
import { FooterComponent } from "./app/components/footer/footer.component";
import { ArticleComponent } from "./app/components/article/article.component";
@getComponent({
    cImport: [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        FooterComponent,
        ArticleComponent
        // {
        //     component:  NavbarComponent,
        //     children: [
        //         FooterComponent
        //     ]
        // },
        // {
        //    component: FooterComponent,
        //    children: [
        //        NavbarComponent
        //    ]
        // }
        
    ]
})
export class ListComponents {
    constructor() {}
}