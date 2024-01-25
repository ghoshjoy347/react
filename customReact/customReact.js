

function customRender(reactElement,container){
/*
    const domelement = document.createElement(reactElement.type)
    
    domelement.innerHTML = reactElement.children
    domelement.setAttribute("href", reactElement.props.href)
    domelement.setAttribute("target",reactElement.props.target)

    container.appendChild(domelement)
    */
    const domelement = document.getElement(reactElement,type)
    domelement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue
            domelement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendchild(domelement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)
