
function ChatPage(){


    return (
        <>
        <p className="text-center text-3xl font-bold">Chat App</p>
      <form action="">
        <div className="fixed w-full text-center p-3 bg-blue-400 bottom-0">
            <input className="w-1/2 p-3 rounded-md" type="text" placeholder="Type a message" />
        <button className="bg-blue-800 ml-6 p-3 rounded-md px-6 text-white">Send</button>
        </div>
      </form>
        </>
    )
}
export default ChatPage