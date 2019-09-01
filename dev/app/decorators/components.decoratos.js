import { ComponentGenerator } from './../../component'
import { printDataInHTML } from '../modules/components.modules';
import { App } from '../../main';

export function Component({selector, template, style}) {
    return function decorator(target) {           
                const component = new target()
                for (let el in component) {
                    App.components[target.name] = {}
                        App.components[target.name].name = target.name
                        App.components[target.name].component = component
                        App.components[target.name].target = target
                        App.components[target.name].selector = selector
                        App.components[target.name].template = template
                        component.active()
                    
                    if (el[0] === '$') {
                        let key 
                        key = el.slice(1, el.length)
                        try {
                            
                            const x = document.querySelector(selector).getAttribute('['+ key +']')
                            if (x) {
                                printDataInHTML(component[el], selector, el, target)
                                
                            } else {
                                console.warn(el)
                            }
                            
                        } catch (er) {
                            if (er ) {
                                console.log('errr :' + er)
                            }
                        }
                    } else {
                        printDataInHTML(component[el], selector, el, target)
                    }
                }
        ComponentGenerator.generate({ selector: selector, template: template})
    }
}




