import { h, Component } from 'preact';
import style from './style';

import { getAllPeople } from '../../lib/api'
export default class Home extends Component {
    state = {
        characters :[],
        favorites :[]
    }
    componentDidMount(){
        console.log( "Component Mounted!")
        getAllPeople().then( characters => this.setState({
            characters: characters
        }))
    }
    addFavorite(character){
        console.log("Add Favorite",character)
        this.setState({favorites: 
          this.state.favorites.concat(character)}) 
    }
    render({},{characters,favorites}) {
        return (
            <div class={style.home}>
                <h1>Home</h1>
                <p>This is the Home component.</p>
                <h3>Favorites</h3>
                <section>
                    {favorites && favorites.length?
                        <div>
                        {favorites.map( fav => 
                            <div>
                                {fav.name} 
                            </div>
                        )}
                        </div>  
                        :'Add your own favorites'}
                </section>
                <h3>Items </h3>
                <section>
                    {characters && characters.length?
                        <div>
                        {characters.map( character => 
                            <div>
                                {character.name} 
                                <button  onClick={()=> this.addFavorite(character)}>Add Favorite</button>
                            </div>
                        )}
                        </div>  
                        :'Loading'}
                </section>
            </div>
        );
    }
}
