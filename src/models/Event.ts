import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  date: Date;
  location: string;
  description: string;
}

const eventSchema: Schema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IEvent>("Event", eventSchema);
