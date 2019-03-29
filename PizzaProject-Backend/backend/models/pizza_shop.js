exports = module.exports = function(app, mongoose){

  var pizzaBranchDataSchema = new mongoose.Schema({
    code: {type: String},
    name: { type: String },
    description: { type: String },
    phone: { type: String },
    mobile: { type: String},
    manager: {type: String}
  });

mongoose.model('PIZZA_BRANCH', pizzaBranchDataSchema);
};