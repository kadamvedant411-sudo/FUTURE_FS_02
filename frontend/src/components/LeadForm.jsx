import { useState } from "react";
import axios from "axios";

function LeadForm() {

const [lead,setLead] = useState({
name:"",
email:"",
source:"",
notes:""
});

const handleChange=(e)=>{
setLead({...lead,[e.target.name]:e.target.value});
};

const handleSubmit=async(e)=>{
e.preventDefault();

await axios.post("http://localhost:5000/api/leads",lead);

alert("Lead Added");

window.location.reload();
};

return(

<div className="bg-gray-100 p-6 rounded-lg shadow-md">

<h2 className="text-2xl font-semibold mb-4">Add New Lead</h2>

<form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>

<input
className="border p-2 rounded"
name="name"
placeholder="Client Name"
onChange={handleChange}
required
/>

<input
className="border p-2 rounded"
name="email"
placeholder="Client Email"
onChange={handleChange}
required
/>

<input
className="border p-2 rounded"
name="source"
placeholder="Lead Source"
onChange={handleChange}
/>

<input
className="border p-2 rounded"
name="notes"
placeholder="Notes"
onChange={handleChange}
/>

<button
className="col-span-2 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
type="submit"
>

Add Lead

</button>

</form>

</div>

);

}

export default LeadForm;