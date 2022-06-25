import AdminSchema from "./AdminUserSchema.js";

export const crateNewAdmin = (obj) => {
  return AdminSchema(obj).save();
};

// export const updateVerificationCodeByUserId = (_id, verifficationCode) => {
//   return AdminSchema.findByIdAndUpdate(_id, {
//     verifficationCode,
//   });
// };
