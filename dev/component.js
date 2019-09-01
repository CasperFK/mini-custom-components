export class ComponentGenerator {
    static generate({selector, template, name}) {
        class ComponentTemplate extends HTMLElement {
            
            constructor() {
                super()   
            }
            connectedCallback() {
                this.innerHTML = template
                this.setAttribute('name', name)
            }
            
            
        }  
        customElements.define(selector, ComponentTemplate)
    }
}