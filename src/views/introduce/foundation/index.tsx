// 基础语法
import { useState } from "react";
import { Button, Col, Row } from "antd";
// props接口定义
interface propsInfo {
  propMsg: string;
}
// 子传父 事件传值
function Bpp({ onSmash }: any) {
  return (
    <Button size="small" type="primary" onClick={() => onSmash("1111")}>
      点击我控制条件渲染
    </Button>
  );
}
export default function FoundationPage({ propMsg }: propsInfo) {
  const [isShowData, setIsShowData] = useState(true);
  // 列表渲染数据
  const list1 = [
    { name: "Tom", age: 18 },
    { name: "Jerry", age: 20 },
    { name: "Lucy", age: 16 },
  ];
  const isShowDataFun = (data: string | React.MouseEvent<HTMLElement>) => {
    console.log(data);
    setIsShowData(!isShowData);
  };
  return (
    <div>
      <h1>基础语法</h1>
      <div className="p-2 border-1 border-[skyblue] border-solid">
        <div className="text-red-500 text-[20px] font-bold">antd Row Col布局</div>
        <Row>
          <Col span={6}>
            <h2>prop传值</h2>
            <div>{propMsg}</div>
          </Col>
          <Col span={10}>
            <h2>条件渲染</h2>
            <Button size="small" type="primary" onClick={isShowDataFun}>
              {isShowData ? "关闭" : "显示"}
            </Button>
            {isShowData && <span>我显示啦啦啦啦！！！</span>}
          </Col>
          <Col span={8}>
            <h2>列表渲染</h2>
            {list1.map((item) => (
              <div key={item.name}>{item.name}</div>
            ))}
          </Col>
        </Row>
      </div>
      <div>
        <h2>响应事件(子传父)</h2>
        <Bpp onSmash={isShowDataFun} />
      </div>
    </div>
  );
}
