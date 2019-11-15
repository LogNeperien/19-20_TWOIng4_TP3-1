import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Database from './Database';
import 'bootstrap/dist/css/bootstrap.min.css';


class Profil extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {random : 0};	
	}
	
	handleClickColor() {
		this.setState({random : Math.round(Math.random() * (6))});
	}
	
	render () {	
		const color = ["article1","article2","article3","article4","article5","article6"];
		console.log("random : ",this.state.random);
		return (
			<div>
				<article className= {color[this.state.random]}>
					<br/>
					<img src={Database[this.props.id].picture}/>
					<br/>
					<br/>
				   {Database[this.props.id].prenom}<span className="tabulation">{Database[this.props.id].nom}</span>
				   <br/>
				   {Database[this.props.id].date}
				   <br/>
				   <br/>
					<button className="Coloris" onClick={() => this.handleClickColor()}>Changer de style</button>
					
				</article>
				
				<article className= {color[this.state.random]}>
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
			<header>
			{this.renderAllProfil(0)}
			{this.renderAllProfil(1)}
			{this.renderAllProfil(2)}
			</header>
			<main>
			  <Profil id={this.state.ProfilCo}/>
			</main>
		  </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <AllPage />,
  document.getElementById('root')
);
