var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){
  object.key = 'value';
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key] = value

  return obj
}

const object = { key: 'value'}

destructivelyUpdateObjectWithKeyAndValue(ojbect, 'key', 'value')

return obj
