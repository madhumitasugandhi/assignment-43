
import './Add.css'
import HomeBtn from './HomeBtn/HomeBtn'
import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  return (
    <div className=' subtitle text-primary'>
      <p>Add Note</p>
      <HomeBtn />
      <input type="text"
        placeholder='Title'
        className='input'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(e.target.value);
        }} />

      <input type="text"
        placeholder='Description'
        className='input'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(e.target.value);
        }} />
<br/>
      <input type="text" 
        className='input-emoji'
        placeholder='Emoji'
        value={emoji}
        onChange={(e) => {
        setEmoji(e.target.value);
        }} 
        />
      <button type='button' className=' btn btn-primary' onClick={() => { setShowEmojiPicker(!showEmojiPicker); }}>
        {showEmojiPicker ? "Close" : "Open "}Emoji Picker
        
      </button>

      <EmojiPicker
        className='emoji'
        open={showEmojiPicker}
        height={"310px"}
        width={"53%"}
        searchDisabled={true}
        onEmojiClick={(emojiData) => {
          setEmoji(emojiData.emoji);
          setShowEmojiPicker(false);
        }}
      />

      <select value={category} onChange={(e) => { setCategory(e.target.value); }}>
        <option value="shopping">Shopping</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
      </select>

      <input type="text"
        placeholder='Priority'
        className='input'
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value);
          console.log(e.target.value);
        }}
      />
      <br />

      <button type='button' className='btn btn-primary' onClick={() => { setTitle(""); }}>Clear</button>
    </div>


  )
}

export default Add