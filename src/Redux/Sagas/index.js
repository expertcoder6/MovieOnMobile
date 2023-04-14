import { takeEvery, put, all, takeLatest, call } from 'redux-saga/effects';



export function* apiCall(data) {

    let data_obj = {}

    data_obj = {
        data: '',
        key: data.payload.key
    }
    yield put({ type: "SERVER_RESPONSE", payload: data_obj })
    // yield put({ type: "SERVER_ERROR" })
}


export function* productSaga(data) {
    console.log('=-=-=-=--=-=-=-=de')
    yield takeEvery("SERVER_REQUEST", apiCall)
}
