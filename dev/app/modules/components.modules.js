export function printDataInHTML (value, selector, key, target, componentName = null) {
    let text = ''
    let flag1 = false
    let flag2 = true
    if (!value) {
        value = '{{ Print Error }}'
    }
    const render = () => {
        text = document.querySelector(selector).innerHTML
        const runReplace = () => {
            flag1 = false
            flag2 = false
            for (let i = 0; i < text.length; i++) {
                if (flag1 == false && ( text[i] == '{' && text[i+1] == '{' ) ) {
                    for (let e = i; e < text.length; e++) {
                        if (text[e] == '}' && text[e+1] == '}') {
                            const textOld = text.slice(i+2, e)
                            if(key[0] === '$') {
                                const com = document.querySelector(value)
                                key = key.slice(1, key.length)
                                const valCom = com.getAttribute('[' + key + ']')
                                value = valCom
                            } 
                            if (textOld == key) {
                                text = text.toString(text).replace('{{' + key + '}}', value )
                                for (let ii = e-1; ii < text.length; ii = ii + 2) {
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
        const doc2 = document.querySelectorAll(selector)
        doc2.forEach(el => {
            el.innerHTML = text
        }) 
    }

    if (!document.querySelector(selector)) { 
    } else {
        if (componentName) {
            render()
        } else {
            window.addEventListener('load', () => {
                render()
            })              
        }
 
    }
}