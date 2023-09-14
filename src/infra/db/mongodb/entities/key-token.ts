import { model, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = 'keys';

// Declare the Schema of the Mongo model
const keyTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Shop'
    },
    publicKey: {
      type: String,
      required: true
    },
    privateKey: {
      type: String,
      required: true
    },
    refreshToken: {
      type: String,
      required: true
    },
    refreshTokensUsed: {
      type: Array,
      default: []
    }
  },
  { collection: COLLECTION_NAME, timestamps: true }
);

//Export the model
export const KeyTokenModel = model(DOCUMENT_NAME, keyTokenSchema);
