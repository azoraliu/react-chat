import React from 'react';
import ChatInput from './chat-input.js';
import Message from './messages.js';
import './style.css';
import {Badge, Button} from 'antd';
import Userlist from "./Userlist";

export default class Chat extends React.Component {
    state={
        showlist:false,
        unreadmsg:false,
    }
    changeshowlist=()=>{
        if(this.props.To){
            this.props.changeUser();
        }else{
            this.setState({showlist:!this.state.showlist})
        }
     }
    compute_unread_msg=(usermessages)=>{
        let totalnum=0;
        Object.keys(usermessages).map((item, index) => {
            let msgs=usermessages[item];
            msgs.data.map((item,index)=>{
                if(item.timestamp>msgs.lasttimestamp){
                    totalnum++;
                }
            })
        })
       return totalnum;
    }
  render() {
    const {className = 'chat-contain', style = {},  From, To,userInfo,userobj, value, placeholder, emoji, customEmoticon, textareaChange,
      selectEmoje, sendMessage,removeMessage,clearMessage,haslist,
      inputFocus, dataSource, usermessages,timestamp, timeBetween, timeagoMax, timeFormat, loading, loader, messageListStyle,
      noData, noDataEle, scrolltoUpper, onScroll, avatarClick, unreadCountChange, scrollOptions,chatRoom
    } = this.props;
      const inputProps = {
          From,
          To,
          userInfo,
          value,
          placeholder,
          emoji,
          customEmoticon,
          textareaChange,
          selectEmoje,
          inputFocus,
          sendMessage,
          ref: 'input'
      };
    const messageProps = {
        removeMessage,
        userInfo,
        dataSource,
        emoji,
        customEmoticon,
        messageListStyle,
        timestamp,
        timeBetween,
        timeagoMax,
        timeFormat,
        loading,
        loader,
        noData,
        noDataEle,
        scrolltoUpper,
        onScroll,
        avatarClick,
        unreadCountChange,
        scrollOptions,
        ref: 'message'
    };

    return (
      <div className={className} style={style}>
          <div id="chat-room" className={'chat-room'}>
              {haslist?<div style={{position:"absolute",display:'inline-block',left:'0px',top:'50%',transform:'translate(0,-50%)'}}>
                  <Badge count={this.state.showlist?0:this.compute_unread_msg(usermessages)}>
                      <Button size={"small"} onClick={this.changeshowlist}>{this.state.showlist?'返回':'用户列表'}</Button>
                  </Badge>
              </div>:null}
              {this.props.To?<span style={{color:'#1890ff'}}>{this.props.To}</span>:<span style={{color:'#1890ff'}}>房间号{chatRoom}</span>}
            {/*<Button size="small" onClick={clearMessage} style={{position:'absolute',right:'10px'}}>清空聊天记录</Button>*/}
          </div>
          {this.state.showlist&&!this.props.To?
              <Userlist changeUser={this.props.changeUser}
                        userobj={userobj}
                        scrollOptions={scrollOptions}
                        usermessages={usermessages}/>
                        :<Message {...messageProps}/>}
          <ChatInput {...inputProps} />
      </div>
    );
  }
}
