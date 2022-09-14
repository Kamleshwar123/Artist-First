import { useState } from "react";

export default function UserChat({ item }) {
    const [sw, setSw] = useState(false);
    return (
        <>
            <p className="usr-re"><span>{item?.userRe?.nm}</span>{item?.userRe?.txt}</p>
            <div className="position-relative">
                <a href="#" className="chat-usr hoverShow" onMouseEnter={() => setSw(true)} onMouseLeave={() => setSw(false)}>
                    <div className="usr-icon usr-icon-sec">
                        <object data={item?.img}>{item?.name}</object>
                    </div>
                    <p className="adm-usr-name adm-usr-name-chat" >{item?.name2}</p>
                    <p className={sw ? "H_action show" : "H_action"}>
                        <span><i className="fa fa-reply"></i></span>
                        <span className="lead emoji-picker-container hoverEmoji">
                            <span data-emojiable="true"></span>
                        </span>
                    </p>
                </a>
                <p className="rp-msg ">{item?.msg}</p>
            </div>
            <p className="d-t">{item?.time}</p>
        </>
    );
}
