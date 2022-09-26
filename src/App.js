import './App.css';
import Button from "./components/Button";

function App() {
    return (
        <div className="app">
            <Button
                onClick={ (  ) => {
                    console.log('Clicked') } }
                type="button"
                // variant="btn--danger--outline" // "btn--primary--solid" || "btn--primary--outline" || "btn--warning--solid" || "btn--warning--outline" || "btn--danger--solid" || "btn--danger--outline" || "btn--succes--solid" || "btn--succes--outline"
                // size="btn--medium" // "btn--small" || "btn--medium" || "btn--large"
                // stretched="btn--stretched" // "btn--fit-content" || "btn--stretched"
                // icon="arrow_forward" // Place the name of icon here. For icon names check: https://fonts.google.com/icons
                // position="icon--right" // "icon--right" || "icon--left"
            >Versturen</Button>
        </div>
    );
}

export default App;
