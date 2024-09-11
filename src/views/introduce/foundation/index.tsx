// 基础语法
// props接口定义
interface propsInfo {
  propMsg: string;
}
export default function foundationPage({ propMsg }: propsInfo) {
  console.log(propMsg, "propMsg");

  return (
    <div>
      <h1>基础语法</h1>
      <h2>prop传值</h2>
      <div>{propMsg}</div>
    </div>
  );
}
