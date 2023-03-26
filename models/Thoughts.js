const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');
const dayjs = require('dayjs')

const timeStamp =(date)=>{
  return dayjs(date).format("")
}
// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
     },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateValue => timeStamp(dateValue)
    },
    username: {
      type: String,
      required: true,
      
    },
  
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reaction.length
})

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
