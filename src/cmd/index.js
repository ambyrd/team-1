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
      console.log(response.files)
      var files = response.files
      for (var x = 0; x < files.length; x++) {
        let file = files[x]
        if (file.mimeType !== 'application/vnd.google-apps.folder' &&  // ignore folders
            file.mimeType !== 'application/x-font-ttf') {  // ignore fonts
          console.log(file, file.mimeType)
          /*
          Build file object:
          {
            -id: id,
            -name: name,
            -type: fileType,
            -createdTime: time,
            -modifiedTime: time,
            -owner: {
              name: name,
              email: email
            },
            sharedWith: [
              {
                name: name,
                email: email
              },
              {
                name: name,
                email: email
              },
              ...
            ]
          }
          */
          let f = {}
          f.id = file.id
          f.name = file.name
          f.type = file.mimeType

          window.fileList[f.id] = f
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
      console.log('***', response)
      window.fileList[id].createdTime = response.createdTime
      window.fileList[id].modifiedTime = response.modifiedTime

      let owner = response.owners[0]
      window.fileList[id].owner = {
        name: owner.displayName,
        email: owner.emailAddress
      }

      window.fileList[id].sharedWith = []
      for (let i = 0; i < response.permissions.length; i++) {
        window.fileList[id].sharedWith.push({
          name: response.permissions[i].displayName,
          email: response.permissions[i].emailAddress
        })
      }
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
