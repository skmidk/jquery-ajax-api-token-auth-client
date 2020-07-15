'use strict'
const store = require('../store')

const signUpSuccess = function(){
  $('#message').text('Successfully signed up!')
}

const signUpFailure = function(){
  $('#message').text('Sign up failed!')
}

const signInSuccess = function(response){
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  $('#message').text('Successfully signed in!')
}

const signInFailure = function(error){
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function(){
  $('#message').text('Change Password Success!')
}

const changePasswordFailure = function(){
  $('#message').text('Change Password failed!')
}

const signOutSuccess = function(){
  $('#message').text('sign out Success!')
}

const signOutFailure = function(){
  $('#message').text('sign out failed!')
}

module.exports = {
signUpSuccess,
signUpFailure,
signInSuccess,
signInFailure,
changePasswordSuccess,
changePasswordFailure,
signOutSuccess,
signOutFailure
}
