var mortgageSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  plan: String,
  bank: String,
  reviewsLink: String,
  rate: Number,
  apr: Number,
  moPayment: Number,
  fees: Number
});

