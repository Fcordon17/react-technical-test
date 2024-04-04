import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PokemonClient } from 'pokenode-ts';
import { globalContext } from "../store/GlobalStore";

function SearchPokemon() {
	const { dispatch } = useContext(globalContext)
	const navigate = useNavigate()
    const [formData, setFormData] = useState('')
    const api = new PokemonClient();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(e.target.value)
	}

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
        console.log('bouh');
        await api.getPokemonByName(formData).then(
            (data) => {
                dispatch({ type: 'POKEMON_DETAILS', payload: data })
            }
        ).catch(
            (error) => console.log(error)
        )

        navigate('/details')
	}

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Nom du Pokemon</label>
            <input
                type='text'
                name='name'
                onChange={handleChange}
                value={formData}
                required
            />
            <button type="submit">Chercher</button>
        </form>
    )
}

export default SearchPokemon
