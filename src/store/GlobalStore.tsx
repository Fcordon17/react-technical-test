import { createContext, ReactNode, useReducer, Dispatch } from 'react';
import { Pokemon } from "pokenode-ts";
import Reducer from './Reducer';

export interface GlobalStateInterface {
    pokemonDetail: Pokemon;
}

export interface ActionType {
    type: string;
    payload?: any;
}

export const GlobalStore = ({
    children,
    value = {} as GlobalStateInterface
}: { 
    children: ReactNode,
    value?: Partial<GlobalStateInterface>
}) => {
    const [globalState, dispatch] = useReducer(Reducer, initialState)

    return (
        <globalContext.Provider value={{ globalState, dispatch }}>
            {children}
        </globalContext.Provider>
    )
}

export const globalContext = createContext({
    globalState: {} as Partial<GlobalStateInterface>,
    dispatch: {} as Dispatch<ActionType>
})

export const initialState ={
    pokemonDetail: {}
}