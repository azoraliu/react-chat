import React, {Component} from "react";
import IScroll from "iscroll";
import { Badge } from 'antd';
import './style.css';
export default class ChatInput extends Component {

    componentDidMount() {
        const {scrollOptions = {}} = this.props;
        this.myScroll = new IScroll('#massage-container', {
            mouseWheel: true,
            click: true,
            scrollbars: true,
            ...scrollOptions
        });
    }
    computecount=(usermessages,user)=>{
        if(!usermessages[user]){return 0;}
        else{
            let count=0;
            usermessages[user].data.map((item,index)=>{
                if(item.timestamp>usermessages[user].lasttimestamp){
                    count++;
                }
            })
            return count;
        }
    }
    render(){
        const {usermessages={}} = this.props;
        return (
            <div className='massage-container' style={{width: '100%',height:'100%',overflow: 'hidden'}} id="massage-container">
                <div className="message-list-wrapper" ref="message-list-wrapper">
                    {Object.keys(this.props.userobj).map((user)=>{
                        let msgnum=this.computecount(usermessages,user);
                        return(
                            <div key={user} style={{borderBottom:'1px solid #ccc',height:'50px',marginLeft:'5px'}} onDoubleClick={this.props.changeUser.bind(this,user)}>
                                <Badge count={msgnum}>
                                    <a className="head-example"
                                       style={{
                                           display: 'inline-block',
                                           borderRadius:'5px',
                                           width: '35px',
                                           height: '35px',
                                           lineHeight: '35px',
                                           backgroundColor: '#fff',
                                           textAlign: "center",
                                       }}>
                                    {user.split('.')[user.split('.').length - 1].charAt(0)}
                                    </a>
                                </Badge>
                                <span style={{display:"inline-block",lineHeight:'50px',marginLeft:'55px'}}>{user}</span>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}
