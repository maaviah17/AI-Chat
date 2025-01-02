import { useState } from 'react'
import axios from 'axios'

const App=()=>{

  const [question,setQuestion] = useState('');
  const [answer,setAnswer] = useState('');

  async function generateAnswer(){
    setAnswer("loading...")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB8f1_1Bp2YoCTVkKD1gdwqqkEXbGQm_9E",
      method: "post",
      data: {
        "contents": [{
          "parts":[{"text": question}]
          }]
        },
    });

    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }


  return (
    <>
 
      <h1 className='bg-teal-300'>AI ChatApp</h1>
      <textarea className='mt-7 bg-teal-600 text-white'
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        cols="30"
        row="20"
      ></textarea>
      <button className='align-center flex bg-gray-400 mt-3' onClick={generateAnswer}>Generate Answer</button>
      <div className='mt-5 bg-teal-900 text-white'>{answer}</div>
    </>
  )
}

export default App
