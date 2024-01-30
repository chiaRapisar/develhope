import { Color } from "./Color";

export function Colors({ colorArr }) {

  return (
    <div>
    <ul>
      {colorArr.map((item) => (
        <Color color={item}/>
      ))}
    </ul>
    </div>
  );
}
