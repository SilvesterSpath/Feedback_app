import { useState, useEffect } from "react"
import Card from "../shared/Card"
import Button from "../shared/Button"


function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisables] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e)=>{        
    if (text.length >= 10 || text.length <= 1){
      setBtnDisables(false)
      setMessage(null)
    } else {
      setBtnDisables(true)
      setMessage('Please write at least 10 chars')
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form >
        <h2>How would you rate your service with us?</h2>
        {/* @TODO - rating select component */}
        <div className="input-group">
          <input type="text" placeholder="Write a review" value={text} onChange={(e)=> handleTextChange(e)}/>
          <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>    
  )
}

export default FeedbackForm