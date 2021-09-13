import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'

const Reaction = ({ id, likes, dislikes }) => {
    const [reaction, setReaction] = useState({ 
      selection: null,
      likes,
      dislikes
    });

    const reactionHandler = (action)=>{
      const url = `/api/${action}`
      fetch(url,{
        method: 'POST',
        body: JSON.stringify({
          _id: id
        })
      }).then(response=>response.json()).then(({ data })=>{
        if(action === 'like'){
          setReaction((prevState)=>({
            ...prevState,
            selection: action,
            likes: data
          }))
        }else{
          setReaction((prevState)=>({
            ...prevState,
            selection: action,
            dislikes: data
          }))
        }
      }).catch((error)=>{
        console.error(error)
      })
    }

    return (
        <>
        <button
        onClick={() => reactionHandler("like")}
        className="inline-block md:mt-3"
        disabled={typeof reaction.selection === 'string'}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-10 inline-block ${
            reaction.selection === "like"
              ? "fill-blue"
              : "fill-black dark:fill-white"
          }`}
        >
          <path d="M9,21h9c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,12.5,23,12.26,23,12v-2c0-1.1-0.9-2-2-2h-6.31l0.95-4.57l0.03-0.32 c0-0.41-0.17-0.79-0.44-1.06L14.17,1L7.58,7.59C7.22,7.95,7,8.45,7,9v10C7,20.1,7.9,21,9,21z M9,9l4.34-4.34L12,10h9v2l-3,7H9V9z M1,9h4v12H1V9z" />
        </svg>
        <span
          className={`pl-3 font-firaSans text-lg align-middle ${
            reaction.selection === "like" ? "text-blue-500" : ""
          }`}
        >
          {reaction.likes}
        </span>
      </button>
      <button
        onClick={() => reactionHandler("dislike")}
        className="inline-block md:mt-3"
        disabled={typeof reaction.selection === 'string'}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-10 inline-block ${
            reaction.selection === "dislike"
              ? "fill-blue"
              : "fill-black dark:fill-white"
          }`}
        >
          <path d="M15,3H6C5.17,3,4.46,3.5,4.16,4.22l-3.02,7.05C1.05,11.5,1,11.74,1,12v2c0,1.1,0.9,2,2,2h6.31l-0.95,4.57l-0.03,0.32 c0,0.41,0.17,0.79,0.44,1.06L9.83,23l6.59-6.59C16.78,16.05,17,15.55,17,15V5C17,3.9,16.1,3,15,3z M15,15l-4.34,4.34L12,14H3v-2 l3-7h9V15z M19,3h4v12h-4V3z" />
        </svg>
        <span
          className={`pl-3 font-firaSans text-lg align-middle ${
            reaction.dislikes === "dislike" ? "text-blue-500" : ""
          }`}
        >
          {reaction.dislikes}
        </span>
      </button>
      </>
    )
}

Reaction.propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
}

export default memo(Reaction)
