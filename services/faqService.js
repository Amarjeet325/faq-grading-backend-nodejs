const Faq = require("../models/faqModel");

exports.getFaqs = async () => {
  return await Faq.find({ isPublished: true }).sort("order");
};

exports.createFaq = async (Data) => {
  return await Faq.create(Data);
};

exports.updateFaq = async (id, data) => {
  return await Faq.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteFaq = async (id) => {
  return await Faq.findByIdAndDelete(id);
};
exports.getFaqById = async (id) => {
  return await Faq.findById(id);
};
