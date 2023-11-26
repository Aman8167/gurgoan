import React from 'react'
import './Payment3.css';
function Payment3() {
  return (
    <div className="container-fluid ">
   
    <div class="form-body" >
  <div className="card-1">
  <div className="row justify-content-center">
  <div className="col-md-10">
  <div className="card-body mt-5">
  <form>
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >lead name<span class="text-danger">*</span></label>
        <input type="text" class="form-control" placeholder="Enter  lead name" />
        
      </div>
    </div>
    
  </div>
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Email ID<span class="text-danger">*</span></label>
        <input type="text" class="form-control" placeholder="Example=anyemail.com" />
        
      </div>
    </div>
    
  </div>
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Phone number<span class="text-danger">*</span></label>
        <input type="numnber" class="form-control" placeholder="Enter number" />
        
      </div>
    </div>
   
  </div>
  
  
  
  
  
 
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Address<span class="text-danger">*</span></label>
        <input type="text" class="form-control" placeholder="Enter your Address" />
        
      </div>
    </div>
    
  </div>
  
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Sale Value<span class="text-danger">*</span></label>
        <input type="text" class="form-control" placeholder="Enter your Sale value" />
        
      </div>
    </div>
    
  </div>
  
  
  <div class="row g-2">
    <div class="col-md">
      <div class="form-group">
      <label >Date<span class="text-danger">*</span></label>
        <input type="Date" class="form-control" placeholder="Enter your Date" />
        
      </div>
    </div>
    
  </div>
  
  
  <div className="form-group">
  <label> Time<span class="text-danger">*</span> </label>
  <input type="time" class="form-control"  placeholder="Enter your time" />
  
  </div>

  <div class="form-group  ">
    <label>Options<span class="text-danger">*</span></label>
            <select  class="form-control  "id="SelectOption">
                <option value="1">Send To</option>
                <option value="1">Send To</option>
                <option value="1">Send To</option>
            </select>
          </div>
  
          <div class="form-group  ">
    <label>Products<span class="text-danger">*</span></label>
            <select  class="form-control  "id="SelectOption">
                <option value="1">Send To</option>
                <option value="1">Send To</option>
                <option value="1">Send To</option>
            </select>
          </div>
  
          <div className="form-group">
  <label> Note <span class="text-danger">*</span></label>
  <input type="text" class="form-control  "  placeholder="Enter your note" style={{height:'10rem'}} />
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <br></br>
  <button id="btn1" className="btn btn-primary w-75 " >
   Add lead
  </button>
  
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Payment3
