import React from 'react'
import { Tabs,Table,Row, Col,Button,Input} from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;
const { Search } = Input;
const columns = [
    {
      title: '退卡时间',
      dataIndex: 'name',
    },
    {
      title: '卡号',
      dataIndex: 'age',
    },
    {
      title: '权益卡|类型',
      dataIndex: 'address',
    },
    {
      title: '退卡金额',
      dataIndex: 'address1',
    },
    {
        title: '会员',
        dataIndex: 'address2',
      },
      {
        title: '操作人',
        dataIndex: 'address3',
      },
      {
        title: '操作',
        dataIndex: 'address4',
      }
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
export default class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
      
        }
    }
render(){
    return(
<div> 
    <div className='one'>
    <Tabs defaultActiveKey="1" type="card">
    <TabPane tab="权限卡管理" key="1">
    <Row>
    <Col span={12}><Button type="primary">新建权益卡</Button></Col>
    <Col push={8} span={4}><Search placeholder="请输入权益卡的卡号" onSearch={value => console.log(value)} 
    style={{width:200 }}/></Col>
    </Row>
    </TabPane>
    <TabPane tab="领卡记录" key="2">
    </TabPane>
    <TabPane tab="退卡记录" key="3">
    </TabPane>
    </Tabs>
    </div>
    <div className="tow">
    <Tabs  type="card">
    <TabPane tab="使用中" key="1">
    </TabPane>
    <TabPane tab="已禁用" key="2">
    </TabPane>
    <TabPane tab="已过期" key="3">
    </TabPane>
    </Tabs>
    </div>
    <div className="three">
    <Table columns={columns} dataSource={data} size="middle" />
    </div>
</div>
)
}
}