const {
    GET_ALL_CLIENTS,
    GET_SPECIFIC_CLIENT,
    ADD_CLIENT,
    GET_CLIENT_VISITS,
    GET_SPECIFIC_VISIT,
    ADD_VISIT,
    GET_CLIENT_BIODATAS,
    GET_SPECIFIC_BIODATA,
    ADD_BIODATA,
    GET_PROFILE
} = require('./controller')

module.exports = (app) => {
    app.route('/clients')
        .get(GET_ALL_CLIENTS)
        .post(ADD_CLIENT)

    app.route('/client/:_id')
        .get(GET_SPECIFIC_CLIENT)

    app.route('/client/:_id/visits')
        .get(GET_CLIENT_VISITS)

    app.route('/client/:_id/biodatas')
        .get(GET_CLIENT_BIODATAS)

    app.route('/biodatas')
        .post(ADD_BIODATA)

    app.route('/biodata/:_id')
        .get(GET_SPECIFIC_BIODATA)

    app.route('/visits')
        .post(ADD_VISIT)

    app.route('/visit/:_id')
        .get(GET_SPECIFIC_VISIT)

    app.route('/profile/:_id')
        .get(GET_PROFILE)
}