import React from 'react';
import ReactDOM from 'react-dom';




import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker onChange={onChange} needConfirm />
    {/* <DatePicker onChange={onChange} showTime needConfirm={false} /> */}
  </Space>
);
export default App;


// 将组件渲染到 HTML 中的 #root 容器中
ReactDOM.render(<App />, document.getElementById('root'));
