import { ComponentGenerator } from './../../component'
import { printDataInHTML, printDataInHTML2 } from '../modules/components.modules';
import { App } from '../../main';

export function Component({selector, template, style}) {
    return function decorator(target) { 
        // console.log(target)          
                const component = new target()
                App.components[target.name] = {}
                App.components[target.name].name = target.name
                App.components[target.name].component = component
                App.components[target.name].target = target
                App.components[target.name].selector = selector
                App.components[target.name].template = template
                App.components[target.name].property = {}
                for (let el in component) {
                    if (el[0] === '$' && el[1] !== '$') {
                        let key = el.slice(1, el.length)
                        App.components[target.name].property[key] = component[el]
                        // let el1
                        // try {
                           
                        //     const x = document.querySelector(selector).getAttribute('['+ key +']')
                        //     if (x) {
                        //         // console.log('ddddd ' + x)
                        //         printDataInHTML(component[el], selector, el, target)
                                
                        //     } else {
                        //         console.warn(el)
                        //     }
                            
                        // } catch (er) {
                        //     if (er ) {
                        //         console.log('errr :' + er)
                        //     }
                        // }
                    } else if (el[0] === '$' && el[1] === '$' ) {
                        let key = el.slice(1, el.length)
                        App.components[target.name].property[key] = selector
                        // console.log('ddddd')
                        // printDataInHTML(component[el], selector, el, target)
                    }
                }
                printDataInHTML2(App.components[target.name], template)
                // console.log(component)
        ComponentGenerator.generate({ selector: selector, template: App.components[target.name].template})
        window.addEventListener('load', () => {
            component.active()
        })
    }
}




