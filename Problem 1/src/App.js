import logo from './logo.svg';
import './App.css';

function App() {
  return (
    	<div>

        <div className="AddNoteContainer">
          <div className="AddNote">
            <input type="text" id="title_note" name="title_note" placeholder="Enter the title"></input><br></br>

            <textarea id="yournote" name="yournote" rows="4" cols="50"></textarea><br></br>
			      <select name="colours" id="colours">
				      <option value="red">Red</option>
				      <option value="blue">Blue</option>
				      <option value="green">Green</option>
			      </select><br></br>
			
			      <button id="add_note_btn" onclick="button_action()">Add Note</button>

          </div><br></br>
        </div>


        <div className="DisplayNoteContainer">
		      <div id="DisplayNote">
		      </div>
	      </div>
        
      </div>
  );
}

export default App;
