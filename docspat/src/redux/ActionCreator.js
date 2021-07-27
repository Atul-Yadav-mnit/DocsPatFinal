import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseURL'

export const FetchingTestimonials = () => (dispatch) => {
    dispatch(Loading_Testimonials)
    fetch(baseUrl + "testimonials")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                //   alert("else ",JSON.stringify(response))
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }
            ,
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => dispatch(Adding_Testimonials(response)))
        .catch(error => dispatch(Failed_Testimonials(error.message)));
}

export const Adding_Testimonials = (response) => {
    return ({
        type: ActionTypes.ADDING_TESTIMONIALS,
        payload: response
    })
}

export const Loading_Testimonials = () => ({
    type: ActionTypes.LOADING_TESTIMONIALS
})

export const Failed_Testimonials = (err) => ({
    type: ActionTypes.FAILED_TESTIMONIALS,
    payload: err
})


export const FetchingDoctors = () => (dispatch) => {
    dispatch(Loading_Doctors())
    fetch(baseUrl + "doctors")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                //   alert("else ",JSON.stringify(response))
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }
            ,
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => dispatch(Adding_Doctors(response)))
        .catch(error => dispatch(Failed_Testimonials(error.message)));
}


export const Adding_Doctors = (response) => ({
    type: ActionTypes.ADDING_DOCTORS,
    payload: response
})

export const Loading_Doctors = () => ({
    type: ActionTypes.LOADING_DOCTORS
})

export const Failed_Doctors = (err) => ({
    type: ActionTypes.FAILED_DOCTORS,
    payload: err
})

export const FetchingDepartments = () => (dispatch) => {
    dispatch(Loading_Departments())
    fetch(baseUrl + "departments")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                //   alert("else ",JSON.stringify(response))
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }
            ,
            error => {

                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => dispatch(Adding_Departments(response)))
        .catch(error => dispatch(Failed_Departments(error.message)));
}


export const Adding_Departments = (response) => ({
    type: ActionTypes.ADDING_DEPARTMENTS,
    payload: response
})

export const Loading_Departments = () => ({
    type: ActionTypes.LOADING_DEPARTMENTS
})

export const Failed_Departments = (err) => ({
    type: ActionTypes.FAILED_DEPARTMENTS,
    payload: err
})

export const LoginPat = (telnum, password) => dispatch => {
    var user = {
        telnum: telnum,
        password: password
    }
    fetch(baseUrl + "patients", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {

            if (response.ok) {
                return response.json();
            } else {
                console.log("else ", JSON.stringify(response))
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }
            ,
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => {
            console.log("response is ", response)
            if (response === null) {
                alert("Invalid Username or password!!!")
            }
            else {
                const temp = {
                    name: response.name,
                    pid: response._id,
                    gender: response.gender,
                    email: response.email,
                    telnum: response.telnum,
                    address: response.address,
                    yob: response.yob
                }


                console.log(temp, " is tempp")
                return (dispatch({
                    type: ActionTypes.LOGIN_PAT,
                    payload: temp
                }))
            }
        })
        .catch(error => alert(error));

}

export const SignUpPat = (name, telnum, email, yob, gender, address, password) => dispatch => {
    var user = {
        telnum: telnum,
        password: password,
        name: name,
        email: email,
        yob: yob,
        gender: gender,
        address: address
    }

    console.log("user is ", user)
    fetch(baseUrl + "patients/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            console.log("response is now ", response)
            if (response.ok) {
                return response.json();
            } else {
                console.log("else ", JSON.stringify(response))
                var error = new Error('Mobile Number already registerd !!!');
                error.response = response;
                throw error;
            }
        }
            ,
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => {
            if (response === null) {
                alert("Invalid Username or password!!!")
            }
            else {
                const temp = {
                    name: response.name,
                    pid: response._id,
                    gender: response.gender,
                    email: response.email,
                    telnum: response.telnum,
                    address: response.address,
                    yob: response.yob
                }


                console.log(temp, " is tempp")
                return (dispatch({
                    type: ActionTypes.LOGIN_PAT,
                    payload: temp
                }))
            }
        })
        .catch(error => alert(error));

}


export const LoginDoc = (telnum, password) => dispatch => {
    var user = {
        telnum: telnum,
        password: password
    }
    fetch(baseUrl + "doctors", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {

            if (response.ok) {
                return response.json();
            } else {
                console.log("else ", JSON.stringify(response))
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }
            ,
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => {
            if (response === null) {
                alert("Invalid Username or password!!!")
            }
            else {
                const temp = {
                    name: response.name,
                    did: response._id,
                    address: response.address
                }

                console.log(temp, " is tempp")
                return (dispatch({
                    type: ActionTypes.LOGIN_DOC,
                    payload: temp
                }))
            }
        })
        .catch(error => alert(error));

}

export const Logout = () => dispatch => {
    dispatch({type:ActionTypes.LOGOUT})
    dispatch({type:ActionTypes.RESET_DOC_APPOINTMENTS})
    dispatch({type:ActionTypes.RESET_PAT_APPOINTMENTS})
}


export const FetchSlots = (did) => (dispatch) => {
    const temp = { did: did }
    fetch(baseUrl + 'slots', {
        method: 'POST',
        body: JSON.stringify(temp),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (response.ok) {
                console.log("response is ok ", response)
                return response.json()
            }
            else {
                console.log("response is not ok ")
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then((response) => {
            if (response.did === undefined) {
                console.log(response)
            }
            else {
                dispatch({
                    type: ActionTypes.FETCH_SLOTS,
                    payload: response
                })
            }
        })
        .catch((err) => alert(err))
}


export const makeAppointment = (did, slotno, uid) => dispatch => {

    const temp = {
        did: did,
        slotno: slotno
    }
    fetch(baseUrl + 'slots', {
        method: 'PUT',
        body: JSON.stringify(temp),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (response.ok) {
                console.log("response is ok ", response)
                return response.json()
            }
            else {
                console.log("response is not ok ")
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then((response) => {

            if (response.did === undefined) {
                console.log(response)
            }
            else {

                dispatch({
                    type: ActionTypes.FETCH_SLOTS,
                    payload: response
                })
                var slot = slotno
                var pos = 6 - response[slotno]

                var temp2 = {
                    patId: uid,
                    docId: did,
                    date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                    slot: slot,
                    position: pos,
                    status: 'booked',
                    prescription: ''
                }
                console.log("temp2 is ", temp2)
                if (pos >= 1) {
                    fetch(baseUrl + 'appointments', {
                        method: 'POST',
                        body: JSON.stringify(temp2),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((response) => {

                            if (response.ok) {
                                alert("Hurray!!! Your appointment is booked , check history in my account section for more details")
                                return response.json();
                            } else {
                                console.log("else ", JSON.stringify(response))
                                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                                error.response = response;
                                throw error;
                            }
                        }
                            ,
                            error => {
                                var errmess = new Error(error.message);
                                throw errmess;
                            })
                        .catch(err => alert(err))
                }
            }
        })
        .catch((err) => alert(err))

}


export const fetchAppointmentsPat = (uid) => dispatch => {
    const temp = {
        patId: uid
    }
    fetch(baseUrl + 'appointments/patients', {
        method: "POST",
        body: JSON.stringify(temp),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            console.log("else ", JSON.stringify(response))
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then((response) => {
        dispatch({
            type : ActionTypes.FETCH_PAT_APPOINTMENTS,
            payload:response
        })
    })
    .catch(err => alert(err))


}


export const fetchAppointmentsDoc = (did) => dispatch => {
    const temp = {
        docId: did
    }
    
    fetch(baseUrl + 'appointments/doctors', {
        method: "POST",
        body: JSON.stringify(temp),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            console.log("else ", JSON.stringify(response))
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then((response) => {
        dispatch({
            type : ActionTypes.FETCH_DOC_APPOINTMENTS,
            payload:response
        })
    })
    .catch(err => alert(err))


}



export const completeAppointment = (ap_id,p) => dispatch => {
    var temp = {
        _id : ap_id,
        prescription : p
    }
    fetch(baseUrl + 'appointments', {
        method: 'PUT',
        body: JSON.stringify(temp),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            if (response.ok) {
                console.log("response is ok ", response)
                return response.json()
            }
            else {
                console.log("response is not ok ")
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then((response) => alert("succesfully updated!!!"))
        .catch(err => alert(err))
        
}