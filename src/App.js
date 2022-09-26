import './App.css';
import Button from "./components/Button";

function App() {
    return (
        <div className="app">
            <Button
                onClick={ (  ) => {
                    console.log('Clicked') } }
                type="button"
                variant="btn--warning--solid"
                size="btn--medium"
                stretched="btn--stretched"
            >Versturen</Button>
        </div>
    );
}

export default App;
