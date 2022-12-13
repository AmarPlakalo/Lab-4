import logo from './logo.svg';
import './App.css';

function App() {

  function button_action()
  {
    let title_content = document.getElementById('title_note').value;
    let note_content = document.getElementById('yournote').value;
    let colour_content = document.getElementById('colours').value;
    
    const node = document.createElement("div");
    
    node.style.backgroundColor = colour_content;

    var input = document.createElement("input");
    input.type = "button";
    input.className = "button";
    input.value = "Edit Note";
    
    input.onclick = function () {
      var title = window.prompt("Enter new title : ");
        
      var content = window.prompt("Enter new content : ");
      
      node.innerHTML = title + "<br><br><br>" + content;
      node.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ));
      node.appendChild(input);
      node.appendChild(input_2);
      
    };

    
    var input_2 = document.createElement("input");
    input_2.type = "button";
    input_2.className = "button";
    input_2.value = "Delete Note";
    input_2.onclick = function () {
      node.remove();
    };
    
    node.innerHTML = title_content + "<br><br><br>" + note_content;
    node.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ));
    node.appendChild(input);
    node.appendChild(input_2);

    document.getElementById("DisplayNote").appendChild(node);
    
  }


  return (
    	<div>
        <div>
		      <h3 className="heading_for_the_app">Note-Taking App</h3>
	      </div><br></br>

        <div className="AddNoteContainer">
          <div className="AddNote">
            <input type="text" id="title_note" name="title_note" placeholder="Enter the title"></input><br></br>

            <textarea id="yournote" name="yournote" rows="4" cols="50"></textarea><br></br>
			      <select name="colours" id="colours">
				      <option value="red">Red</option>
				      <option value="blue">Blue</option>
				      <option value="green">Green</option>
			      </select><br></br>
			
			      <button id="add_note_btn" onClick={button_action}>Add Note</button>

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
