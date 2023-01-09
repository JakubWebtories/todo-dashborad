import FormTask from "./Features/FormTask";
import TaskList from "./Features/TaskList";
import EditTask from "./Features/EditTask";
import Category from "./Features/Category";
import Header from "./Components/Header";
import HorizontalBar from "./Components/HorizontalBar";
import {  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"

const App = () => {

  return (
    <div className="App">

      <div className="horizontal-container">
        <HorizontalBar />
      </div>

      <div className="main-container">

        <div className="header-container">        
          <Header />
        </div>
        
        <div className="app-container">
        
          <div className="body-container inner-padding">          
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add-task" element={<FormTask />} />
              <Route path="/edit-task/:id" element={<EditTask />} />
              <Route path="/category" element={<Category />} />
            </Routes>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App;
