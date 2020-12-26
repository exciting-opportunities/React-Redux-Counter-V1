import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);

// const bindActionCreator = (creator, dispatch) =>(...args)=>{
//     dispatch(creator(...args));
// }




// const decDispatch = bindActionCreators(dec,dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);


    ReactDOM.render(
       <Provider store={store}>
           <App/>
       </Provider>,document.getElementById('root'));




