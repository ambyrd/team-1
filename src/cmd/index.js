// import {router} from '../index'

/* global gapi, $ */

export default{

  getFiles () {
    var request = gapi.client.request({
      'method': 'GET',
      'path': '/drive/v3/files'
    })
        // Execute the API request.
    request.execute(function (response) {
      console.log(response)
      var files = response.files
      for (var x = 0; x < files.length; x++) {
        let file = files[x]
        if (file.mimeType !== 'application/vnd.google-apps.folder') {
          console.log(file, file.mimeType)
          let btnInfo = $('<button/>', {onclick: "getFileMetadata('" + file.id + "')", class: 'btn btn-outline-success space-left', text: 'Get Info'})
          let btnPerm = $('<button/>', {onclick: "getFilePermissions('" + file.id + "')", class: 'btn btn-outline-success space-left', text: 'Get Permissions'})
          let div = $('<div/>', {class: 'list-group-item list-group-item-action', text: file.name})
          div.append(btnInfo)
          div.append(btnPerm)
          $('#file-list').append(div)
        }
      }
    })
  },

  getFileMetadata (id) {
    console.log('getFileMetadata(" + id + ")')
    // Request to access gapi for drive "gapi.client.drive.files" specifies the API to use, 
    // the .get method is the standard Google drive GET method
    // 'fileId' is the file's ID value in string format
    // 'fields' allows for specific subfields to be pulled by listing which ones you want delimitted by a space, with '*' pulling all fields
    let request = gapi.client.drive.files.get({
      'fileId': id, 'fields': '*'
    })
    // Executes API request, outputting object to 'response'
    request.execute(function (response) {
      console.log(response)
    })
  },

  // Pulls Permissions subfield from file metadata and logs the object to console
  getFilePermissions (id) {
    console.log('getFilePermissions(" + id + ")')
    let request = gapi.client.drive.files.get({
      'fileId': id, 'fields': 'permissions'
    })
    request.execute(function (response) {
      let perMetaDataObj = response
      let perObj = perMetaDataObj.permissions
      let permissions = perObj[0]
      console.log(permissions)
    })
  }
}
