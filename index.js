var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {key: ['value']})
  return obj
}

function updateObjectWithKeyAndValue(object, key, value){
  object.key = ['value']
  retirn obj
}
