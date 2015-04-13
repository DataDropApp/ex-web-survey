var request = require('request');
var q = require("q");

function Accessor(opts){
  
  var url = opts.url;
  var key = opts.key;
  
  var headers = {
    "Authorization" : "Bearer " + key,
    "Content-Type" : "text/plain",
    "Accept": "application/json",
  };
  
  this.read = function(){
    
    var def = q.defer();
    
    request({
      url: url,
      headers: headers,
      method: "GET",
    }, function(err, response, body){
      if(err){
        return def.reject(err);
      }
      
      if(response.statusCode == 200){
        def.resolve(body);
      }else{
        def.reject(body);
      }
      
    });
    
    return def.promise;
  };
  
  this.write = function(data){
    
    var def = q.defer();
    
    request({
      url: url,
      headers: headers,
      method: "PUT",
      body: data,
    }, function(err, response, body){
      if(err){
        return def.reject(err);
      }
      
      if(response.statusCode == 202){
        def.resolve(body);
      }else{
        def.reject(body);
      }
      
    });
    
    return def.promise;
  };
  
  this.append = function(data){
    var def = q.defer();
    
    request({
      url: url,
      headers: headers,
      method: "POST",
      body: data,
    }, function(err, response, body){
      if(err){
        return def.reject(err);
      }
      
      if(response.statusCode == 202){
        def.resolve(body);
      }else{
        def.reject(body);
      }
      
    });
    
    return def.promise;
  };
  
  this.delete = function(){
    var def = q.defer();
    
    request({
      url: url,
      headers: headers,
      method: "DELETE"
    }, function(err, response, body){
      if(err){
        return def.reject(err);
      }
      
      if(response.statusCode == 200){
        def.resolve(body);
      }else{
        def.reject(body);
      }
      
    });
    
    return def.promise;
  };
  
}


module.exports = function(opts){
  return new Accessor(opts);
};