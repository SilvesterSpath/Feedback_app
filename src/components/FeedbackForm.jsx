import { useState, useEffect } from "react"
import Card from "../shared/Card"
import Button from "../shared/Button"


function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e)=>{    
    setText(e.target.value)
    console.log(text);
  }

  return (
    <Card>
      <form >
        <h2>How would you rate your service with us?</h2>
        {/* @TODO - rating select component */}
        <div className="input-group">
          <input type="text" placeholder="Write a review" value={text} onChange={(e)=> handleTextChange(e)}/>
          <Button type="submit" >Send</Button>
        </div>
      </form>
    </Card>    
  )
}

export default FeedbackForm