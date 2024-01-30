import axios from "axios"
import { useEffect, useState } from "react"

function ChatPage() {
  const [message, setMessage] = useState()
  const [allMessage,setAllMessages]=useState([])
  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }


  const token = localStorage.getItem('token')
  const handleMessage = async (e) => {

    try {
      e.preventDefault()
      const res = await axios.post('http://localhost:5000/postMessage', { message: message }, { headers: { token: token } })
      setMessage('')

    }
    catch (err) { console.log(err) }
  }

  const { name } = parseJwt(token)
  const getMessages = async () => {
    console.log(name)
    const res = await axios.get('http://localhost:5000/getMessages', { headers: { token: token } })
    console.log(res.data.messages)
    setAllMessages(res.data.messages)
  }

  useEffect(() => {
    setInterval(() => {
      
      getMessages()
    }, 1000);
  }, [])


  return (
    <>
      <p className="text-center text-3xl font-bold">Chat App</p>
      {allMessage.map((e)=>{
        return (
          <>
          <p>

          {e.user.name}: {e.message}
          </p>
          </>
        )
      })}
      <form onSubmit={handleMessage} action="">
        <div className="fixed w-full text-center p-3 bg-blue-400 bottom-0">
          <input value={message} onChange={(e) => { setMessage(e.target.value) }} className="w-1/2 p-3 rounded-md" type="text" placeholder="Type a message" />
          <button className="bg-blue-800 ml-6 p-3 rounded-md px-6 text-white">Send</button>
        </div>
      </form>
    </>
  )
}
export default ChatPage