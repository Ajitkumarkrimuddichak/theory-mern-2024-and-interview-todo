import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // mongoose ka ye packeg hai jo Aggregate  query likhane ka power deta hai //search and read  mongoose Aggregate Paginate

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Aapako export karane se pahale used karana parata hai
videoSchema.plugin(mongooseAggregatePaginate); //videoSchema ke sath bahut sara method used hota hai //mongoose ke andar bahut sara Middleware likha ja sakata hai or khud ke plugin bhi inject kiye ja sakate hai
// Ab ham query likh sakate hai jo Aggregate query hai

export const Video = mongoose.model("Video", videoSchema);
