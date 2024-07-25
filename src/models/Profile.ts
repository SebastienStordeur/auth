import { model, models, Schema } from "mongoose";

export type Profile = {
  email: string;
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
};

const ProfileSchema = new Schema<Profile>(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    displayName: { type: String },
    bio: { type: String },
    avatarUrl: { type: String },
    coverUrl: { type: String },
  },
  { timestamps: true }
);

export const ProfileModel =
  models.Profile || model<Profile>("Profile", ProfileSchema);
