import { useEffect, useState } from "react";
import axios from "axios";

function LeadList(){

const [leads,setLeads] = useState([]);

useEffect(()=>{
fetchLeads();
},[]);

const fetchLeads = async ()=>{
const res = await axios.get("http://localhost:5000/api/leads");
setLeads(res.data);
};

const updateStatus = async (id,status)=>{
await axios.put(`http://localhost:5000/api/leads/${id}`,{status});
fetchLeads();
};

const deleteLead = async (id)=>{
await axios.delete(`http://localhost:5000/api/leads/${id}`);
fetchLeads();
};

return(

<div>

<h2 className="text-2xl font-semibold mb-4">Lead Dashboard</h2>

<table className="w-full border rounded-lg overflow-hidden">

<thead className="bg-indigo-600 text-white">

<tr>
<th className="p-3">Name</th>
<th>Email</th>
<th>Source</th>
<th>Status</th>
<th>Notes</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{leads.map((lead)=>(
<tr key={lead._id} className="text-center border-b">

<td className="p-2">{lead.name}</td>
<td>{lead.email}</td>
<td>{lead.source}</td>

<td>

<select
className="border rounded p-1"
value={lead.status}
onChange={(e)=>updateStatus(lead._id,e.target.value)}
>

<option>New</option>
<option>Contacted</option>
<option>Converted</option>

</select>

</td>

<td>{lead.notes}</td>

<td>

<button
className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
onClick={()=>deleteLead(lead._id)}
>

Delete

</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

);

}

export default LeadList;