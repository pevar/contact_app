var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

    receiveAll: function(rawNodes) {
        AppDispatcher.handleServerAction({
            type: "RECEIVE_RAW_NODES",
            rawNodes: rawNodes
        });
    },

};