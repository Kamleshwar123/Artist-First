import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserChat from "../../components/UserChat/UserChat";
import add3Dots from "../../util/ThreeDots"
/* import ChannelDetailCard from "../../components/community/Channel"; */

const channels = ['933764998067544074', '933765043382792303', '933765077616705537', '933765114463678556'];

export async function getStaticProps() {
    const { API_URL } = process.env;
    let url = API_URL + "/api/artist-assets/1?populate=*";
    let data;
    try {
        const res = await fetch(
            "https://admin.artistfirst.in/api/community-messages"
        );
        const data1 = await res.json();
        data = data1.data;

        var results = data.reduce(function (results, org) {
            (results[org.attributes.channelId] = results[org.attributes.channelId] || []).push(org);
            return results;
        }, {})

        //   console.log('results',results);
        return {
            props: {
                data: results,
                url,
                API_URL: API_URL + "/api",
            },
            revalidate: 1,
        };
    } catch (error) {
        // The  API most likely died
        console.error(error);
        return {
            props: {
                url,
                API_URL: API_URL + "/api",
                error: JSON.stringify(error),
            },
            revalidate: 1, // In seconds
        };
    }
}

/* const singer1 = {
    name: "Kaka(Ravinder Singh)",
    image: "https://sevencvod.s.llnwi.net/GhaintPunjab/kaka-punjabi-singer-ghaintpunjab.png",
};

const singer2 = {
    name: "Jass Manak",
    image: "https://pbs.twimg.com/profile_images/1360192675647868937/gifgx4fa_400x400.jpg",
};


const singer3 = {
    name: "Neha Kakkar",
    image: "https://cdn.siasat.com/wp-content/uploads/2021/06/neha.jpg",
};

const singer4 = {
    name: "Jubin Nautiyal",
    image: "https://1.bp.blogspot.com/-bpeRmP1gLE0/YJ1inbhHmhI/AAAAAAAAA4Q/POwM6Rl4GAw2ri-qkgSd0zYJCl06xDyrgCNcBGAsYHQ/s564/jubin%2B1.jpg",
}; */

export default function Home(props) {
    const [open, setOpen]=useState(true);
    const [select, setSelect]=useState(0);
    const [Cdata, setCData]=useState([]);
    const [Channnels, setChannnels]=useState([]);
    const [Categories, setCategories]=useState([]);
    const [ChannelTypes, setChannelTypes]=useState([]);
    const [Communities, setCommunities]=useState([]);
    const [values, setValues]=useState("");
    async function getCommunityChannnels() {
        try {
        const res = await fetch(`https://admin.artistfirst.in/api/community-channels?populate=*`)
        const data = await res.json();
        setChannnels(data);
        return data
        } catch(error) {
            console.log(error);
        }
    }
    async function getCommunityChannelTypes() {
        try {
            const res = await fetch(`https://admin.artistfirst.in/api/community-channel-types?populate=*`)
            const data = await res.json();
            setChannelTypes(data);
            return data
        } catch(error) {
            console.log(error);
        }
    }
    async function getCommunityCategories() {
        try {
            const res = await fetch(`https://admin.artistfirst.in/api/community-categories?populate=*`)
            const data = await res.json();
            setCategories(data);
            return data
        } catch(error) {
            console.log(error);
        }
    }
    async function getCommunities() {
        try {
            const res = await fetch(`https://admin.artistfirst.in/api/communities?populate=*`)
            const data = await res.json();
            setCommunities(data);
            return data
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCommunityChannnels();
        getCommunities();
        getCommunityCategories();
        getCommunityChannelTypes();
      return () => {}
    }, [])

    function scriptLoad () {
        $(function() {
            window.emojiPicker = new EmojiPicker({
                emojiable_selector: '[data-emojiable=true]',
                assetsPath: '/images/emoji/',
                popupButtonClasses: 'fa fa-smile-o'
            });
            window.emojiPicker.discover();
        });
        window.googletag = window.googletag || {
            cmd: []
        };
        googletag.cmd.push(function() {
            googletag
                .defineSlot(
                    '/6355419/Travel/Europe/France/Paris', [300, 250], 'banner-ad')
                .addService(googletag.pubads());
            googletag.enableServices();
        });
        googletag.cmd.push(function() {
            googletag.display('banner-ad');
        });
    }
    useEffect(() => {
        scriptLoad();
      return () => {
      }
    }, [])
    const chat=[
        {
            id: 0,
            data:[
            {id:0, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Kundan Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:1, userRe:{nm: "", txt: ""},
            name: "KP", name2: "Mahesh Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:2, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Mahesh Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:3, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Mahesh Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:4, userRe:{nm: "", txt: ""},
            name: "KP", name2: "Mahesh Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:5, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Mahesh Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
        ]},
        {
            id: 1,
            data:[
            {id:0, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Kundan Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:1, userRe:{nm: "", txt: ""},
            name: "KP", name2: "Ganesh Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:2, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Ganesh Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:3, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Ganesh Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:4, userRe:{nm: "", txt: ""},
            name: "RP", name2: "Ganesh Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:5, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "RP", name2: "Ganesh Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
        ]},
        {
            id: 2,
            data:[
            {id:0, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "DP", name2: "Kundan Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:1, userRe:{nm: "", txt: ""},
            name: "KP", name2: "Kundan Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:2, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "DP", name2: "Kundan Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:3, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Kundan Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:4, userRe:{nm: "", txt: ""},
            name: "KP", name2: "Kundan Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:5, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "DP", name2: "Kundan Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
        ]}
        ,{
            id: 3,
            data:[
            {id:0, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "CP", name2: "Ramesh Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:0, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "CP", name2: "Ramesh Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:2, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Ramesh Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:3, userRe:{nm: "", txt: ""},
            name: "KP", name2: "Ramesh Prashad",
            img: "./images/community/krish.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:4, userRe:{nm: "", txt: ""},
            name: "CP", name2: "Kundan Prashad",
            img: "",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
            {id:5, userRe:{nm: "@xyz", txt: "is anyone out here?"},
            name: "KP", name2: "Kundan Prashad",
            img: "./images/community/rahu.png",
            msg: "Hi Jaswant, Pls reply to this message",
            time: "2 days ago"
            },
        ]}
    ]
    useEffect(() => {
      let dt=chat.find((ele)=>{
          return ele.id === select;
      })
      setCData(dt?.data);
      return () => {
      }
    }, [select])
    function renderName (item) {
        return (<>
            <span className="c_name" data-toggle="tooltip"  data-placement="right" html={true} title={item?.attributes?.community_name && item?.attributes?.isExclusive ? item?.attributes?.community_name +" "+  "(Exclusive)" : item?.attributes?.community_name}>
            {(item?.attributes?.community_name && item?.attributes?.isExclusive ? item?.attributes?.community_name +" "+  "(Exclusive)" : item?.attributes?.community_name)}
            </span>
            <span className={item?.attributes?.isTrending ? "trend show" : "trend"}>Trending</span>
            <span><img className="pinned" src="./images/community/pined.png" /></span>
            </>)
    }
    return (
        <Layout>
                <Head>
                    <title>{props?.data?.attributes?.Title}</title>
                    <meta name="description" content={props?.data?.attributes?.Description} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <section className="body-bg scrollY">
                    <div className="com-name">
                        <h1>Community</h1>
                    </div>
                    <div className="com-wrapper">
                        <nav id="sidebar" className={open ? "" : "active"}>
                            {/* <div className="sidebar-header">
                                <div className="searc-com">
                                    <input type="text" placeholder="Search By Artist Name, Announcement" />
                                    <img src="./images/community/search-icon-small.png" onClick={()=> setOpen(!open)}/>
                                </div>
                            </div> */}
                            <ul className="list-unstyled components">
                            {Communities?.data && Communities?.data?.length > 0 && Communities?.data?.map((item,i)=> {
                                return  (
                                <li key={i} className={select === i ? "com-uni active" : "com-uni"} onClick={()=>setSelect(i)}>
                                    <a href="" onClick={(e)=>{e.preventDefault();}}><img src={item?.attributes?.community_icon?.data?.attributes?.url} alt={item?.attributes?.community_icon?.data?.attributes?.alternativeText}/>
                                        <div className="comabout">
                                            <p className="com-us-name">
                                                {renderName(item)}
                                                <span className="com-memb">{item?.attributes?.member_count ? item?.attributes?.member_count : "0"} Members</span>
                                            </p>
                                            <p className="noti">15</p>
                                            <img className="more-m dropdown-toggle" src="./images/community/ellipsis-v.png" data-toggle="dropdown" aria-expanded="false" onClick={(e)=>{e.preventDefault();}}/>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Action 2</a>
                                                <a className="dropdown-item" href="#">Action 3</a>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                )})}
                            </ul>
                        </nav>
                        <div id="content">
                            <div className="middle-bar">
                                <button type="button" onClick={()=> setOpen(!open)} id="sidebarCollapse" className={open ? "navbar-btn" : "navbar-btn active"}>
                                    <span><img src="./images/community/left-ar.png" className={open ? "": "rotateArr"}/></span>
                                    <span></span>
                                </button>
                                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fas fa-align-justify"></i>
                                </button>
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="nav nav-tabs nav-tabs-new">
                                                {Channnels?.data && Channnels?.data?.length > 0 &&(
                                                <li className="nav-item">
                                                    <a className="nav-link nav-link-new active" data-toggle="tab" href="#home">{Channnels?.data[0]?.attributes?.channel_name}</a>
                                                </li>
                                                )}
                                                {Channnels?.data && Channnels?.data?.length > 1 &&(
                                                <li className="nav-item">
                                                    <a className="nav-link nav-link-new" data-toggle="tab" href="#menu1">{Channnels?.data[1]?.attributes?.channel_name}</a>
                                                </li>
                                                )}
                                                {Channnels?.data && Channnels?.data?.length > 2 &&
                                                <li>
                                                    <div className="dropdown com-drop">
                                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                            More
                                                        </div>
                                                        <div className="dropdown-menu">
                                                        {Channnels?.data?.map((item,i)=>(
                                                            i > 1 &&
                                                            <a key={i} className="dropdown-item" href="#" >{item?.attributes?.channel_name}</a>
                                                        ))}
                                                        </div>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                        <div className="tab-content">
                                            <div id="home" className="container tab-pane active"><br />
                                                {Cdata?.length > 0 && Cdata.map((item,i)=>(
                                                <div className="usrchat" key={i}>
                                                    <UserChat item={item}/>
                                                </div>))}
                                            </div>
                                            <div id="menu1" className="container tab-pane fade"><br />
                                                <h3>Menu 1</h3>
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                            <div className="comment-area">
                                                <div className="comment-box">
                                                    <p className="lead emoji-picker-container">
                                                        <input type="text" className="form-control" placeholder="Type a comment" data-emojiable="true" onChange={(e)=>{console.log(e,"dfdf");setValues(e.target.value)}} value={values}/>
                                                        <div className="send-msg">
                                                            <img src="./images/community/send-btn.png" />
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-sidebar">
                                        <div className="right-side-bar-search">
                                            <h1>People</h1>
                                            <div className="collapse fade" id="searchForm">
                                                <input id="search" type="search" className="form-control border-0" placeholder="Search" />
                                            </div>
                                            <a className="nav-link ml-auto" href="#searchForm" data-target="#searchForm" data-toggle="collapse">
                                                <img src="./images/community/small-search-right.png" />
                                            </a>
                                        </div>
                                        <div className="adm">
                                            <p>Owner</p>
                                        </div>
                                        <div className="adm-usr">
                                            <div className="row">
                                                <div className="adm-usr">
                                                    <div className="row">
                                                        <a href="#" className="ml-15">
                                                            <div className="usr-icon">
                                                                <object data="">KP</object>
                                                            </div>
                                                            <p className="adm-usr-name">Artist First</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="adm adm-mem">
                                            <p>Owner</p>
                                        </div>
                                        <div className="row mt-4 adm-usr">
                                            <a href="#">
                                                <div className="usr-icon">
                                                    <object data="./images/community/krish.png">KP</object>
                                                </div>
                                                <p className="adm-usr-name">Kartik Aryan</p>
                                            </a>
                                        </div>
                                        <div className="row mt-4 adm-usr">
                                            <a href="#">
                                                <div className="usr-icon">
                                                    <object data="./images/community/rahu.png">KP</object>
                                                </div>
                                                <p className="adm-usr-name">Rahul Khanna</p>
                                            </a>
                                        </div>
                                        <div className="row mt-4 adm-usr">
                                            <a href="#">
                                                <div className="usr-icon">
                                                    <object data="./images/community/krish.png">KP</object>
                                                </div>
                                                <p className="adm-usr-name">Ashish Tyagi</p>
                                            </a>
                                        </div>
                                        <div className="com-all-cmt">
                                            <a href="#">
                                                View All (349 Members)
                                            </a>
                                        </div>
                                        <div className="border-bottom-right-sidebar"></div>
                                        <div id="banner-ad" className="bnnnerHW">
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
        </Layout>
    );
}
