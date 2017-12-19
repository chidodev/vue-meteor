import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  text: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
  },
  owner: {
    type: String,
    optional: true,
  },
  username: {
    type: String,
    max: 100,
    optional: true,
  },
  private: {
    type: Boolean,
    optional: true,
  },
  completed: {
    type: Boolean,
    optional: true,
  },
});
