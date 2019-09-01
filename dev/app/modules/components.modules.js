import { App } from "../../main";

export function printDataInHTML2 (component, template, listComponents) {
    let flag1 = false
        let flag2 = true
        let flag3 = false
        let text = template
    for (let el in component.property) {
        
        let key = el
        for (let i = 0; i < text.length; i++) {
            if (flag1 == false && ( text[i] == '{' && text[i+1] == '{' ) ) {
                for (let e = i; e < text.length; e++) {
                    if (text[e] == '}' && text[e+1] == '}') {
                        const textOld = text.slice(i+2, e)
                        if(key[0] === '$') {
                            const com = document.querySelector(component.property[el])
                            key = key.slice(1, key.length)
                            const valCom = com.getAttribute('[' + key + ']')
                            const parent = listComponents[com.parentElement.getAttribute('name')]
                            if (parent.property[valCom]) {
                                component.property[el] = parent.property[valCom]
                            } else {
                                component.property[el] = 'Error: ' + valCom
                            }
                        } 
                        if (textOld == key) {
                            text = text.toString(text).replace('{{' + key + '}}', component.property[el] )
                            for (let ii = e-1; ii < text.length; ii = ii + 2) {
                               if (text[ii] == '{' && text[ii+1] == '{' )  {
                                    flag2 = true
                                    template = text
                                } else {
                                    flag2 = false
                                    flag3 = true
                                    
                                }
                            }   
                        }
                    }
                }
            }
        } 
    }
   
        const doc2 = document.querySelectorAll(component.selector)
        doc2.forEach(el => {
            el.innerHTML = text
            component.template = text
        }) 
}

export const getAttributeValue = (text, key) => {
    return text.search('[' + key + ']')
}