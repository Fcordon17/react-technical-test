import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { globalContext } from '../store/GlobalStore'

const PokemonDetail = () => {
    const context = useContext(globalContext)
    const pokemon = context.globalState.pokemonDetail

    return pokemon ? (
        <>
            <Link className="contrast" to='/'>
                Retour à la liste !
            </Link>
            <table border={1} style={{ background: "white", color: "blue", width: 800 }}>
                <tbody>
                    <tr>
                        <td width="1">
                            Nom
                        </td>
                        <td>{pokemon.name}</td>
                    </tr>
                    <tr>
                        <td width="1">
                            Taille
                        </td>
                        <td>{pokemon.height}"</td>
                    </tr>
                    <tr>
                        <td width="1">
                            Poids
                        </td>
                        <td>{pokemon.weight} Kg</td>
                    </tr>
                    {pokemon.abilities.map((a, index) => {
                        return(
                            <tr key={index}>
                                <td>Ability {index + 1}</td>
                                <td>{a.ability.name}</td>
                            </tr>
                        )
                    })}
                    {pokemon.forms.map((f, index) => {
                        return(
                            <tr key={index}>
                                <td>Form {index + 1}</td>
                                <td>{f.name}</td>
                            </tr>
                        )
                    })}
                    {pokemon.stats.map((s, index) => {
                        return(
                            <tr key={index}>
                                <td>{s.stat.name}</td>
                                <td>{s.base_stat}</td>
                            </tr>
                        )
                    })}
                    {pokemon.types.map((t, index) => {
                        return(
                            <tr key={index}>
                                <td>Type {index + 1}</td>
                                <td>{t.type.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    ) : (
        <p>no information</p>
    )
}

export default PokemonDetail
