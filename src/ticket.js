var Ticket = function(config){
  var zdrequest = require('./zdrequest.js')(config);

  return {
    list: function(){
      return zdrequest.get('/tickets.json')
    },

    show: function(id){
      return zdrequest.get('/tickets/' + id + '.json')
    },

    create: function(data){
      return zdrequest.post('/tickets.json', {ticket: data})
    },

    update: function(id, data){
      return zdrequest.put('/tickets/' + id + '.json', {ticket: data})
    },

    delete: function(id){
      return zdrequest.delete('/tickets/' + id + '.json')
    }
  }
}

module.exports = Ticket;
