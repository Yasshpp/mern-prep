const MainContainer = document.querySelector('#root') 

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',

    },
    content: 'Click on me'
}

function customRender(reactElement, MainContainer){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.content
// domElement.setAttribute('href', reactElement.props.href) 
// domElement.setAttribute('target', reactElement.props.target) 

  for (const prop in reactElement.props) {
    if( prop === 'content')continue;
    domElement.setAttribute(prop, reactElement.props[prop])
  }
    
MainContainer.appendChild(domElement)
} 

customRender(reactElement, MainContainer)

