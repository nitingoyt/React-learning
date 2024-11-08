import React from 'react'

export default function Forms(){
    return(
        <>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Full name" aria-describedby="emailHelp"/>
  </div>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Age</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Age" aria-describedby="emailHelp"/>
  </div>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email@example.com" aria-describedby="emailHelp"/>
  </div>
         <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Contact</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="+91" aria-describedby="emailHelp"/>
    <div className="form-text" id="basic-addon4">Enter +91 indian cell only</div>
  </div>
  <div class="d-grid gap-1 col-3 mx-auto">
  <button class="btn btn-primary" type="button">Submit</button>
</div>
        </>
    )
}