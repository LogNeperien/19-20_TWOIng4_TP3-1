import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Database from './Database';
import 'bootstrap/dist/css/bootstrap.min.css';


class Profil extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {profils : Database};	
	}
	
	
	render () {	
		return (
			<div>
				<article>
					<br/>
					<img src={Database[this.props.id].picture}/>
					<br/>
					<br/>
				   {Database[this.props.id].prenom}<span class="tabulation">{Database[this.props.id].nom}</span>
				   <br/>
				   {Database[this.props.id].date}
				</article>
				<article>
					{Database[this.props.id].description}
					<br/>
					{Database[this.props.id].like}
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
		  {ProfilCo : i}
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
			  <Profil id={this.state.ProfilCo}/>
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

