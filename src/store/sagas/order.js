import { put, delay } from 'redux-saga/effects';

import axios from '../../axios-orders';
import { purchaseBurgerFail, purchaseBurgerStart, purchaseBurgerSuccess, fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFail } from '../actions';

export function* purchaseBurgerSaga(action) {
    try {
        yield put(purchaseBurgerStart());
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(purchaseBurgerSuccess(response.data.name, action.orderData))
    } catch(error) {
        yield put(purchaseBurgerFail(error));
    }
}

export function* fetchOrdersSaga(action) {
    yield put(fetchOrdersStart);
    const queryparams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';

    try {
        const response = yield axios.get('./orders.json' + queryparams);
        const fetchOrders = [];
        
        for (let key in response.data) {
            fetchOrders.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(fetchOrdersSuccess(fetchOrders));
    } catch(error) {
        yield put(fetchOrdersFail(error));
    }
}
