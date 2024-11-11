const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    email: {
      type:String,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    phone:{
      type:String,
      required:true,
    },
    availability:{
      type:Array,
      required:true,
    }
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", schema);

module.exports = Doctor;