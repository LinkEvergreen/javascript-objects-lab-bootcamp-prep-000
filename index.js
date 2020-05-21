var obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.key = ['value']
  return obj
}

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {key: ['value']})
  return obj
}
