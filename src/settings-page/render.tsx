import ReactDOM from 'react-dom/client'
import OptionPage from "."
import '../../index.css'

function initial() {
    // Create a new div element and append it to the document's body
    const rootDiv = document.createElement('div')
    rootDiv.id = 'popup-root'
    document.body.appendChild(rootDiv)
  
    // Use `createRoot` to create a root, then render the <App /> component
    // Note that `createRoot` takes the container DOM node, not the React element
    const root = ReactDOM.createRoot(rootDiv)
    root.render(<OptionPage />)
  }

  initial();