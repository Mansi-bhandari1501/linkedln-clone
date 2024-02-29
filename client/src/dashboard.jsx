// import React, { useState } from "react";
// // import Comment from "./components/Comment/index.jsx"
// import Post from "./components/Post/index.jsx";
// import FormDialog from "./components/Profile-Form/index.jsx";
// import UserCard from "./components/Card/userCard.jsx";
// import { ReactionBarSelector } from "@charkour/react-reactions";
// import { FacebookSelector } from "@charkour/react-reactions";
// import { FacebookCounter } from "@charkour/react-reactions";
// import { Box } from "@mui/material";
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import { useDispatch } from "react-redux";

// const Dashboard = () => {

  
//   const defaultIcon = <ThumbUpOffAltIcon sx={{height:"24px", width:"24px", marginRight:"4px", color:"#5E5E5E"}} />;
//   const emojis = {
//     Like : '👍',
//     Celebrate : '👏',
//     Support : '🫰',
//     love : '❤️',
//     Insightful : '💡',
//     Funny : '😂',
//     defaultIcon 
//   }
//   const [expanded, setExpanded] = useState(false);
//   const dispatch = useDispatch();
//   const [emoji, setEmoji] = useState( defaultIcon); 
//   const [reactionCount, setReactionCount] = useState("1");
//   const [commentCount, setCommentCount] = useState('1');
//   const [status, setStatus] = useState(false);
//   const [reactionContent, setReactionContent] = useState("Like")
//   useEffect(()=> {
//     try {
//       dispatch(getUserReactions(post._id)).then((response)=> {
//         if(response.payload) {
//           setReactionContent(response.payload? response.payload.type : "Like");
//           setEmoji(response.payload? emojis[response.payload.type] : emojis[defaultIcon])
//         }           
//       })
//     } catch (error) {
//       console.log(error);
//     }
    
//   }, [])
  
//   // const userReaction = useSelector((state)=> state.reaction.userReaction[post._id]);

  
//   // if(userReaction) {
//   //   setReactionContent(userReaction);
//   //   setEmoji(emojis[userReaction]);
//   // }
  
//   const handleExpandClick = () => {
//     setExpanded(true);
//   };

//   const fetchReactions = async(e) => {
//     dispatch(getReactions(post._id))
//   }

//   const handleClick = () => {
//       setReactionContent("Like");
//       status ? setEmoji(defaultIcon) : setEmoji(emojis["Like"]);
//       setStatus(!status); 
      
//   }
//   return (
//     <>
//       dashboard
//       {/* <UserCard/>
//     <ReactionBarSelector />
//     <FacebookSelector />
//     <FacebookCounter /> */}
//       <Box className="adjacent">
//         <ReactionBarSelector
//           reactions={[
//             { label: "Like", node: <node>👍</node>, key: "Like" },
//             { label: "Celebrate", node: <node>👏</node>, key: "Celebrate" },
//             { label: "Support", node: <node>🫰</node>, key: "Support" },
//             { label: "love", node: <node>❤️</node>, key: "love" },
//             { label: "Insightful", node: <node>💡</node>, key: "Insightful" },
//             { label: "Funny", node: <node>😂</node>, key: "Funny" },
//           ]}
//           onSelect={(key) => {
//             if (key === reactionContent && emoji === emojis[reactionContent]) {
//               setEmoji(emojis.defaultIcon);
//               setReactionContent("Like");
//             } else {
//               setEmoji(emojis[key]);
//               setReactionContent(key);
//             }
//             const obj = {
//               type: key,
//               postId: post._id,
//             };
//             dispatch(addReactions(obj));
//           }}
//         />
//       </Box>
//     </>
//   );
// };

// export default Dashboard;
