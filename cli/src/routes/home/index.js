import { h, Component } from 'preact';
import style from './style';

import { getAllPeople } from '../../lib/api'
export default class Home extends Component {
    state = {
        characters :[]
    }
    componentDidMount(){
        console.log( "Component Mounted!")
        getAllPeople().then( characters => this.setState({
            characters: characters
        }))
    }
	render({},{characters}) {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
                <section>
                    {characters && characters.length?
                        <div>
                        {characters.map( character => 
                            <div>
                                {character.name} 
                            </div>
                        )}
                        </div>
                        :'Loading'}
                </section>
			</div>
		);
	}
}
