import Foundation from "./foundation";
import UseEffectReact from "./hooks/UseEffectReact";
export default function introduce() {
  return (
    <div>
      <Foundation propMsg="我是prop传值" />
      <UseEffectReact />
    </div>
  );
}
