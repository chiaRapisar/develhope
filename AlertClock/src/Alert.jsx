export function AlertClock() {
    function showTime() {
        const now = new Date()
        
        alert(`L'ora corrente è ${now.toLocaleTimeString()}`)
    }
    return (
        <div>
            <h3>Click the button below to show the current time</h3>
            <button onClick={showTime}>Click me!</button>
        </div>
    )
    
}