const mainaction = (props) => {

    const depositMoney = (amount) => {
        return (dispatch) => {
            dispatch({
                type: 'deposit',
                payload: amount
            })
        }
    }

    const withdrawMoney = (amount) => {
        return (dispatch) => {
            dispatch({
                type: 'withdraw',
                payload: amount
            })
        }
    }

};
export default mainaction;