import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Database from './Database';

class AllProfil extends React.Component{
	
	
	render () {	
		return (
			<div>
				<button className="Personn" /*onClick={this.props.onClick}*/>
					Bob
				</button>
		
				<button className="Personn" /*onClick={this.props.onClick}*/>
					Amadeus
				</button>
				
				<button className="Personn" /*onClick={this.props.onClick}*/>
					Angele
				</button>
			</div>
		  );
	}
}

class Profil extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {profils : Database, ProfilCo : 0};	
	}
	
	render () {	
		return (
			<div>
			   {this.state.profils[0].nom}
			</div>
		  );
	}
}



class AllPage extends React.Component{
	
	render() {
        return (
		  <div className="page">
			<div className="navigation">
			  <AllProfil/>
			</div>
			<div className="info-profil">
			  <Profil/>
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

const profils = [
	{
		prenom: "Bob",
		nom : "Marley",
		date : "06/02/1945",
	},
	{
		prenom: "Wolfgang",
		nom : "Mozart",
		date : "27/01/1756",
	},
	{
		prenom: "Angele",
		nom : "VanLaeken",
		date : "02/12/1995",
	}
];

