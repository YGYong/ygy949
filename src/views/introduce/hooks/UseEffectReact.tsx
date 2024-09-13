import { useEffect } from "react";

export default function EffectHooks() {
  useEffect(() => {
    console.log("effecthooks");
    return () => {
      console.log("effecthooks destroy");
    };
  });
  return <div>useEffects</div>;
}
