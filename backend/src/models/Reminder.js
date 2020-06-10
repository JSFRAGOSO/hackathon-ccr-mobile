const {Schema,model} = require ('mongoose');

const ReminderSchema = new Schema({
  title:String,
  description:String,
  thumbnail:String,
  hours:String,
  
},{
  timestamps:true,
  toJSON:{
     virtuals:true 
  }
})

ReminderSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
})

module.exports = model('Reminder',ReminderSchema);