export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }
  //Esercizio 2 con secondo button
  function printSrc(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Cliccami
      </button>
      <br/>
      <br />
      <button onClick={printSrc}>
        <img src="https://cdn.icon-icons.com/icons2/1674/PNG/64/image_111003.png" />
      </button>
    </div>
  );
}
