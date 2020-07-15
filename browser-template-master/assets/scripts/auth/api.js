'use strict'

const config = require('../config')
const store = require('../store')
//store is object token was put in, on sign in success

const signUp = function(formData){
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    type: "POST",
    data: formData
  })
}

const signIn = function(formData){
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    type: 'POST',
    data: formData
  })
}

const changePassword = function(formData){
  return $.ajax({
    url: config.apiUrl + '/change-password',
    type: 'PATCH',
    data: formData,
    headers: {
      //access token from store.user object
      //only works if we sign in first
      Authorization: 'Bearer '+ store.user.token
    }
  })
}

const signOut = function(){
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    type: 'DELETE',
    headers: {
      //access token from store.user object
      //only works if we sign in first
      Authorization: 'Bearer '+ store.user.token
    }
  })
}

module.exports = {
signUp,
signIn,
changePassword,
signOut
}
