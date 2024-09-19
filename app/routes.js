//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



router.post('/destination-answer', function(request, response) {

    var destination = request.session.data['whereWillYouGo']
    if (destination == "Moon"){
        response.redirect("/moon")
    } else {
        response.redirect("/mars")
    }
})