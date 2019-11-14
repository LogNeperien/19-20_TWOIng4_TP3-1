import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class AllProfil extends React.Component{
	
	
	render () {	
		return (
			<div>
				<button className="Jeanne" /*onClick={this.props.onClick}*/>
					coucou
					//{this.props.value}
				</button>
		
				<button className="Martine" /*onClick={this.props.onClick}*/>
					coucou
				  //{this.props.value}
				</button>
				
				<button className="Claude" /*onClick={this.props.onClick}*/>
					coucou
				  //{this.props.value}
				</button>
			</div>
		  );
	}
}

class AllPage extends React.Component{
	render() {
        return (
		  <div className="page">
			<div className="page-board">
			  <AllProfil/>
			</div>
		  </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <AllPage />,
  document.getElementById('root')
);



/*
class Page extends React.Component {
  renderAllProfil(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }*/