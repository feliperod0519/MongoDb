//var mongoose = require('mongoose');
//var schema = mongoose.Schema;
//var path = require('path');

//var ImageSchema = new Schema({
//                               title: { type: String }, description: { type: String },
//                               filename: { type: String }, views: { type: Number, 'default': 0 },
//                               likes: { type: Number, 'default': 0 }, timestamp: { type: Date, 'default': Date.now }
//});

//ImageSchema.virtual('uniqueId').get(function () {
//                                                    return this.filename.replace(path.extname(this.filename), '');
//});

//module.exports = {
//    ImageModel: mongoose.model('ImageModel', ImageSchema),
//    getAll: function (req, res) {

//    }
//};


