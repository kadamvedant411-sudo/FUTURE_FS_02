import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import './App.css';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500 tracking-wide">
       LeadFlow CRM Dashboard
      </h1>

        <LeadForm />

        <div className="mt-10">
          <LeadList />
        </div>

      </div>

    </div>
  );
}

export default App;