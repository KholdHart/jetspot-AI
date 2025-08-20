import { useEffect, useRef } from 'react';
import { IKImage } from "imagekitio-react";


import './chatPage.css'

const ChatPage = () => {

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div className="message"> Test message from ai</div>
          <div className="message user"> Test message from ai</div>
          <div ref={endRef} />
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : data?.history?.map((message, i) => (
                <>
                  {message.img && (
                    <IKImage
                      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                      path={message.img}
                      height="300"
                      width="400"
                      transformation={[{ height: 300, width: 400 }]}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                    />
                  )}
                  <div
                    className={
                      message.role === "user" ? "message user" : "message"
                    }
                    key={i}
                  >
                    <Markdown>{message.parts[0].text}</Markdown>
                  </div>
                </>
              ))}

          {data && <NewPrompt data={data}/>}
        </div>
      </div>
    </div>
  );
}

export default ChatPage