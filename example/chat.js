import React, {Component} from 'react';
import ChatReact from '../src';
import {Col, Layout, Row} from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;
// import ChatReact from '../lib/chat-react';
// import {emojis} from '../components/chat/icon';
// const vConsole = new VConsole();
export default class Chat extends Component {
  state = {
    selectuser:null,
    usermessages:{'soda.web.user1':{'lasttimestamp':1,data:[{"value": "123","timestamp":1565421739000,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}}]}},
    messages: [],
    userobj:{'soda.web.user1':{user:'soda.web.user1'},'soda.web.user2':{user:'soda.web.user2'},'soda.web.user3':{user:'soda.web.user3'},'soda.web.user4':{user:'soda.web.user4'},
      'soda.web.user5':{user:'soda.web.user5'},'soda.web.user6':{user:'soda.web.user6'},'soda.web.user7':{user:'soda.web.user7'},'soda.web.user8':{user:'soda.web.user8'}},
    timestamp: new Date().getTime(),
    name : 'hechangxi',
    room : 'room0915',
    lbs : 'wss://devsoda.youdao.com:8004/lbs',
  }

  componentDidMount() {
    // const messages = [{"value": "123","timestamp":1548756977198,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756979285,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n1","timestamp":1548756979622,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n","timestamp":1548756979901,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756980189,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756980509,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756980789,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n1","timestamp":1548756981093,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756981397,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756981684,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756981949,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756982206,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n","timestamp":1548756982478,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756982750,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756983046,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756983430,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}}]
    // const messages = [{"value": "123","timestamp":1548756977198,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756979285,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n1","timestamp":1548756979622,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n","timestamp":1548756979901,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756980189,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756980509,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756980789,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n1","timestamp":1548756981093,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756981397,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756981684,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756981949,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n1","timestamp":1548756982206,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n","timestamp":1548756982478,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756982750,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756983046,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1548756983430,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}}]
    // const messages = [{"value": "123","timestamp":1548756977150,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":'1212'}},{"value": "123","timestamp":1548756977198,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":this.state.name}}];
    // const messages = [{"value": "123","timestamp":121212121,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":'1212'}}]
    // const messages = [];
    const messages =[{"value": "123","timestamp":1565421739000,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1565853739000,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n1","timestamp":1566285739000,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"\n","timestamp":1566544939000,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}},{"value":"1\n","timestamp":1566545119000,"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea53107d66ceb0a598"}}]
    setTimeout(() => {
      this.setState({messages, timestamp: new Date().getTime()});
    }, 800)
  }
  foucss = () => {
    const {messages} = this.state;
    messages.push({"value": "123","timestamp": 'new Date().getTime()',"userInfo":{"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}});
    this.setState({messages, timestamp: new Date().getTime()});
    // this.chat.refs.message.setScrollTop(600);
  }
  scrolltoUpper = (v) => {
    this.setState({loading: true});

    const {messages} = this.state;
    messages.unshift({
      "value": "vvvvvvv",
      "timestamp": 1448156977198,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg", "userId":"59e454ea52107d66ceb0a598"}
    });
    messages.unshift({
      "value": "vvvvvvv2222",
      "timestamp": 1448156977298,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}
    });
    messages.unshift({
      "value": "vvvvvvv2222",
      "timestamp": 1448156977398,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}
    });
    messages.unshift({
      "value": "vvvvvvv2222",
      "timestamp": 1448156977498,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}
    });
    messages.unshift({
      "value": "vvvvvvv2222",
      "timestamp": 1448156977598,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}
    });
    messages.unshift({
      "value": "vvvvvvv2222",
      "timestamp": 1448156977698,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}
    });
    messages.unshift({
      "value": "vvvvvvv2222",
      "timestamp": 1448156977898,
      "userInfo": {"avatar":"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg","userId":"59e454ea52107d66ceb0a598"}
    });
    setTimeout(() => {
      this.setState({messages, timestamp: new Date().getTime(), loading: false});
    }, 1222)
  }
  onScroll = (v) => {
    // console.log(v);
  }
  sendMessage = (v) => {
    console.log('v',v);
    const {value} = v;
    if (!value) return;
    let {messages = [],usermessages={}} = this.state;
    if(!v.To){
      messages.push(v);
      this.setState({messages, timestamp: new Date().getTime(), inputValue: ''});
    }else{
      if(v.From!==this.state.name&&v.To!==this.state.name){return;}
      let adduser=v.From===this.state.name?v.To:v.From;
      if(!usermessages[adduser]){
        usermessages[adduser]={'lasttimestamp':1,data:[]}
      }
      usermessages[adduser].data.push(v);
      this.setState({usermessages, timestamp: new Date().getTime(), inputValue: ''});
    }
  }
  removeMessage = (v) => {
     console.log(v);
  }
  clearMessage=()=>{
    console.log('clear');
    let messages = [];
    this.setState({messages:[],timestamp: new Date().getTime(),inputValue: ''});
  }
    changeUser=(user)=>{
      if(!user){
        let usermessages=this.state.usermessages;
        usermessages[this.state.selectuser].lasttimestamp=new Date().getTime();
        this.setState({usermessages: usermessages,selectuser:null});
      }
      this.setState({selectuser:user});
    }

  render() {
    const {inputValue = '', messages,usermessages, timestamp, loading,userlist} = this.state;
    const {className = ''} = this.props;
    let dataSource=messages;
    if(this.state.selectuser){
      if(usermessages[this.state.selectuser]){
        dataSource=usermessages[this.state.selectuser].data;
      }else{
        dataSource=[];
      }
    }
    // const userInfo = {
    //   avatar: "http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg",
    //   userId: "59e454ea53107d66ceb0a598"
    // };
    const userInfo = {avatar:"http://img.binlive.cn/Fv0UOcmxAB7k_4JSWMzJLkgpZfUg",userId:this.state.name};
    return (
        <Layout style={{height:'100vh'}}>
          <Header style={{backgroundColor:'#ccc',height:'5vh'}}>soda-chat</Header>
          <Layout style={{ backgroundColor:'#fff',height:'90vh'}}>
            <Row style={{height:'100%'}}>
              <Col span={18}></Col>
              <Col span={6} style={{height:'100%'}}>
                <div className={`chat-box ${className}`} style={{height:'100%'}}>
                  <ChatReact
                      // haslist={false}
                      From={this.state.name}
                      To={this.state.selectuser}
                      chatRoom={this.state.room}
                      selectuser={this.state.selectuser}
                      dataSource={dataSource}
                      usermessages={usermessages}
                      userobj={this.state.userobj}
                      userInfo={userInfo}
                      value={inputValue}
                      changeUser={this.changeUser}
                      clearMessage={this.clearMessage}
                      sendMessage={this.sendMessage}
                      removeMessage={this.removeMessage}
                      timestamp={timestamp}
                      placeholder="请输入"
                      // messageListStyle={{width: '100%',height:'100%',overflow: 'hidden'}}
                      // customEmoticon={false}
                      //not must
                      textareaChange={this.textareaChange}
                      ref={el => this.chat = el}
                      timeBetween={30}
                      timeagoMax={24}
                      timeFormat="yyyy-MM-dd hh:mm"
                      loading={loading}
                      // noData
                      // noDataEle={<div>无数据</div>}
                      scrolltoUpper={this.scrolltoUpper}
                      onScroll={this.onScroll}
                      scrollOptions={{fadeScrollbars: true}}
                      // unreadCountChange={this.onScroll}
                  />
                </div>
              </Col>
            </Row>
          </Layout>
          <Footer style={{backgroundColor:'#ccc',height:'5vh'}}>Footer</Footer>
        </Layout>
    );
  }
}



