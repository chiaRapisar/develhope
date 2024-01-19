export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name)
        
    }
    return (
        <button name="one" onClick={handleButtonClick}>
            Cliccamiii
            </button>
    )
    
}