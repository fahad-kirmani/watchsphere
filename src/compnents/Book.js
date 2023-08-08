import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'

export const Book = () => {
    const location = useLocation()
    const name = location.state
    const [details, setdetails] = useState({email:"", tickets:""})
    const changed = (e) => {
        setdetails({...details, [e.target.name] : e.target.value})
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(details)
        localStorage.setItem("details" , details)
    }
  return (
    <>
<form className='form' onSubmit={submit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Show</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} disabled="true"/>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={details.email} onChange={changed}/>
  <label for="exampleInputEmail1" class="form-label">Number of tickets</label>
    <input name="tickets"type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={details.tickets} onChange={changed}/>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
    </>
  )
}
