var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){
  object.assign({}, object, {key: ['value']})
  return obj
}
