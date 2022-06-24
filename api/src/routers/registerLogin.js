import express, { Router } from "express";
import { hashPassword } from "../helpers/bcryptHelper.js";
import { adminRegistrationValidation } from "../middlewares/validationMiddleware.js";
import { crateNewAdmin } from "../models/adminUser/AdminUserModel.js";
const route = express.Router();

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  try {
    //1. encrypt password
    req.body.password = hashPassword(req.body.password);

    //2. call model to run save query
    const result = await crateNewAdmin(req.body);
    console.log(result);
    //3. unique url endpoint and sent that to customer.
    res.json({
      status: "success",
      message:
        "We have sent you an email, please check email and follwo the instruction sent in your email",
    });
  } catch (error) {
    if (error.message.includes("E1100 duplicate key error colection")) {
      error.status = 200;
      error.message =
        "There is already a register user with this email, please login with this email or use different email";
    }
    next(error);
  }
});

export default route;
