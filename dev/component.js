export class ComponentGenerator {
    static generate({selector, template}) {
        class ComponentTemplate extends HTMLElement {
            
            constructor() {
                super()   
            }
            connectedCallback() {
                this.innerHTML = template
            }
            
        }  
        customElements.define(selector, ComponentTemplate)
    }
}