import { model, Schema } from 'mongoose';

const notesSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const NotesCollection = model('notes', notesSchema);
