import SimpleSchema from 'simpl-schema';

const nameSchema = new SimpleSchema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
});

export default new SimpleSchema({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: nameSchema,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
  },
});
