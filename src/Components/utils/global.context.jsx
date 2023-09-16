import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const localState = localStorage.getItem("state");
const setState = (state) =>
  localStorage.setItem("state", JSON.stringify(state));

export const ContextGlobal = createContext(undefined);

const initialState = () => {
  if (localState !== null) {
    return JSON.parse(localState);
  } else {
    return {
      theme: true,
      dentistas: [],
      favs: [],
      dentista: {},
    };
  }
};

const pageReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      const newState = {
        dentistas: state.dentistas,
        favs: state.favs,
        dentista: state.dentista,
        theme: !state.theme,
      };
      setState(newState);
      return newState;
    case "GET_LIST":
      setState({
        theme: state.theme,
        dentistas: action.payload,
        favs: state.favs,
        dentista: state.dentista,
      });
      return {
        theme: state.theme,
        dentistas: action.payload,
        favs: state.favs,
        dentista: state.dentista,
      };
    case "GET_USER":
      setState({
        theme: state.theme,
        dentistas: state.dentistas,
        favs: state.favs,
        dentista: action.payload,
      });
      return {
        theme: state.theme,
        dentistas: state.dentistas,
        favs: state.favs,
        dentista: action.payload,
      };
    case "FAV":
      const favIndex = state.favs.findIndex(
        (obj) => obj.id === action.payload.id
      );
      if (favIndex !== -1) {
        const updatedFavs = [...state.favs];
        updatedFavs.splice(favIndex, 1);
        setState({
          theme: state.theme,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: updatedFavs,
        });
        return {
          theme: state.theme,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: updatedFavs,
        };
      } else {
        setState({
          theme: state.theme,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: state.favs.concat(action.payload),
        });
        return {
          theme: state.theme,
          dentistas: state.dentistas,
          dentista: state.dentista,
          favs: state.favs.concat(action.payload),
        };
      }
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(pageReducer, initialState());
  const URL = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    axios(URL).then((res) => {
      pageDispatch({ type: "GET_LIST", payload: res.data });
    });
  }, [URL]);

  return (
    <ContextGlobal.Provider value={{ pageState, pageDispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const context = () => useContext(ContextGlobal);
