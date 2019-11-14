import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Database from './Database';
import 'bootstrap/dist/css/bootstrap.min.css'

/*class AllProfil extends React.Component{
	constructor(props) {
		super(props);
		this.state = {profils : Database};	
	}
	
	render () {	
		return (
			<header>
				<button className="Personn" onClick={this.props.handleChange1}>
					{this.state.profils[0].prenom}
				</button>
		
				<button className="Personn" onClick={this.props.handleChange2}>
					{this.state.profils[1].prenom}
				</button>
				
				<button className="Personn" onClick={this.props.handleChange3}>
					{this.state.profils[2].prenom}
				</button>
			</header>
		  );
	}
}*/

class Profil extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {profils : Database, ProfilCo : 0};	
	}
	
	
	render () {	
		return (
			<div>
				<article>
				   {this.state.profils[this.state.ProfilCo].prenom}<span class="tabulation">{this.state.profils[this.state.ProfilCo].nom}</span>
				   <br/>
				   {this.state.profils[this.state.ProfilCo].date}
				</article>
				<article>
					{this.state.profils[this.state.ProfilCo].description}
					<br/>
					{this.state.profils[this.state.ProfilCo].like}
				</article>
			</div>
		  );
	}
}



class AllPage extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {ProfilCo : 0};

		this.handleClickButton = this.handleClickButton.bind(this);
	}
	
	handleClickButton(i)
	{
		this.setState(
		  {num : i}
		)
	}
	
	renderAllProfil(i)
	{
		return (
		<button className="Personn" onClick={() => this.handleClickButton(i)}>
		   {Database[i].prenom} 
		</button>);
	}
	
	render() {
        return (
		  <div className="page">
			<div className="navigation">
			{this.renderAllProfil(0)}
			{this.renderAllProfil(1)}
			{this.renderAllProfil(2)}
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

