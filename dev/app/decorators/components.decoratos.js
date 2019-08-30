import { ComponentGenerator } from './../../component'

export function getComponent({cImport, cExport}) {
    return function get(target) {
        
        cImport.map(el => {
            if( typeof el === "function"){
                const component = new el()
                window.addEventListener('loadedmetadata', () => component.active())
            } else {
                const component = new el.component()
                window.addEventListener('loadedmetadata', () => component.active())
                const components = el.children
                components.map(com => {
                    const child = new com()
                window.addEventListener('loadedmetadata', () => child.active())
                }) 

            }
            
        })
    }
}

export function Component({selector, template, style, id}) {
    return function decorator(target) {
        target.prototype.selector = selector;
        target.prototype.template = template;
        target.prototype.thisTarget = target
        target.prototype.documentComponents= document.querySelectorAll(selector)
        
        const doc1 = (event, callback) => {
            target.prototype.documentComponents.forEach(el => {
                el.addEventListener(event, callback)
            })
        }
        target.prototype.documentComponentListener = (event,callback) => doc1(event,callback)
         const bb = (() => {
            return document.querySelectorAll(selector)
        })
        target.prototype.DOMComponents = bb()
         const aa = (() => {
            const el = document.querySelectorAll(selector)
            if (el.length === 1) {
                return el
            } else if (el.length >= 1) {
                target.prototype.DOMComponents = el
            }
        })
        target.prototype.DOMComponent = aa()

        ComponentGenerator.generate({ selector: target.prototype.selector, template: template, id: id})
    }
}

export function printDataInHTML () {
    return function render (target, key) {
        let val
        return {
            set: function(value) {
                window.addEventListener('load', () => {
                    let text = document.querySelector(target.selector).innerHTML
                    let flag1 = false
                    let flag2 = true
                    const runReplace = () => {
                        flag1 = false
                        for (let i = 0; i < text.length; i++) {
                            if (flag1 == false && ( text[i] == '{' && text[i+1] == '{' ) ) {
                                for (let e = i+1; e < text.length; e++) {
                                    if (text[e] == '}' && text[e+1] == '}') {
                                        const textOld = text.slice(i+2, e)
                                        if (textOld == key) {
                                            val = text.toString(text).replace('{{' + key + '}}', value )
                                            text = val
                                            flag1 = true
                                            for (let ii = 0; ii < text.length; ii++) {
                                               if (text[ii] == '{' && text[ii+1] == '{' )  {
                                                    flag2 = true
                                                    run()
                                                } else {
                                                    flag2 = false
                                                }
                                            }   
                                        }
                                    }
                                }
                            }
                        }
                    }
                    const run = () => {
                        if (flag2) {
                            runReplace()
                            
                        }
                    } 
                    run()
                     
                    const doc2 = document.querySelectorAll(target.selector)
                    doc2.forEach(el => {
                        el.innerHTML = val
                    }) 
                })    
            },
            get: function(value) {      
            },
            enumerable: true,
            configurable: true
        }             
    }
}