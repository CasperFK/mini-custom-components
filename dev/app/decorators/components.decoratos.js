import { ComponentGenerator } from './../../component'
import { printDataInHTML, printDataInHTML2 } from '../modules/components.modules';
import { App } from '../../main';

export function Component({selector, template, style}) {
    return function decorator(target) { 
        console.log(style)          
                const component = new target()
                App.components[target.name] = {}
                App.components[target.name].name = target.name
                App.components[target.name].component = component
                App.components[target.name].target = target
                App.components[target.name].selector = selector
                App.components[target.name].template = template
                App.components[target.name].property = {}
                App.components[target.name].parent = {}
                for (let el in component) {
                    if (el[0] === '$' && el[1] !== '$') {
                        let key = el.slice(1, el.length)
                        App.components[target.name].property[key] = component[el]
                        
                    } else if (el[0] === '$' && el[1] === '$' ) {
                        let key = el.slice(1, el.length)
                        App.components[target.name].property[key] = selector
                        
                        App.components[target.name].parent[key] = key
                    }
                }
                printDataInHTML2(App.components[target.name], template, App.components)
        ComponentGenerator.generate({ selector: selector, template: App.components[target.name].template, name: App.components[target.name].name, style: style})
        
        window.addEventListener('load', () => {
            component.active()
        })
    }
}




