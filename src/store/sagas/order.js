import { put, delay } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export function* purchaseBurgerSaga(action) {
    try {

    } catch(error) {
        
    }
     return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
        .then(response => {
            dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        });
    };
}