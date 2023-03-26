const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs')
const timeStamp =(date)=>{
  return dayjs(date).format("")
}
// need formatting for day js dd/mm/yyy... etc. need to add day js to 
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      
    },
    username: {
      type: String,
      required: true,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateValue => timeStamp(dateValue)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
