import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow 
        projectId='3a79feb2-0c71-43fc-a991-958155c52eee'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage;