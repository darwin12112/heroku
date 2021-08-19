const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user");
const enjoy_controller = require("../controllers/enjoy");
const checkAuth = require("../middleware/authChecker");
const checkAdmin=require("../middleware/adminChecker");
const complaints_controller=require('../controllers/complaints');
const bonus_controller=require('../controllers/bonus');
const bank_controller=require('../controllers/bank');
/**
 * @route   POST /register
 * @desc    Register new user
 * @access  Public
 */
router.post("/signup", user_controller.user_register);

/**
 * @route   PUT /phone
 * @desc    Update user phone details and Send SMS OTP verfication code
 * @access  Private
 */
router.post("/phone", user_controller.user_phone);
router.post("/phoneChange",checkAuth, user_controller.user_phone_change);
/**
 * @route   POST /verify
 * @desc    Send SMS OTP verfication code
 * @access  Private
 */
router.post("/verify", user_controller.user_verify);
router.post("/nickname", checkAuth, user_controller.postNickname);
// @route   POST /login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", user_controller.user_login);
router.post("/change-password", checkAuth,user_controller.change_password);
// @route   POST /enjoy
// @desc    enjoy request
// @access  Public
router.get("/enjoy/:level", checkAuth,enjoy_controller.getEnjoy);
router.post("/enjoy", checkAuth,enjoy_controller.postEnjoy);
router.get("/enjoy-page/:level/:page", checkAuth,enjoy_controller.getEnjoyPage);
router.get("/enjoy-my-page/:level/:page", checkAuth,enjoy_controller.getEnjoyMyPage);
//admin enjoy
router.get("/enjoy-admin/:level", checkAuth,checkAdmin,enjoy_controller.getEnjoyAdmin);
router.post("/enjoy-admin", checkAuth,checkAdmin,enjoy_controller.postEnjoyAdmin);
router.post("/enjoy-admin-auto", checkAuth,checkAdmin,enjoy_controller.postEnjoyAdminAuto);
//complaints
router.get("/complaints", checkAuth,complaints_controller.getComplaints);
router.post("/complaints", checkAuth,complaints_controller.postComplaints);
router.put("/complaints", checkAuth,checkAdmin,complaints_controller.putComplaints);
router.get("/complaints-admin", checkAuth,checkAdmin,complaints_controller.getComplaintsAdmin);
router.post("/complaints-admin", checkAuth,checkAdmin,complaints_controller.postComplaintsAdmin);


//Referal
router.get("/bonus/:no", checkAuth,bonus_controller.getBonus);
router.post("/apply/:no", checkAuth,bonus_controller.postApply);
router.get("/apply", checkAuth,bonus_controller.getApply);
router.get("/refered/:level", checkAuth,bonus_controller.getRefered);

//Bank
router.post("/bank", checkAuth,bank_controller.postBank);
router.delete("/bank", checkAuth,bank_controller.deleteBank);
router.post("/withdrawl", checkAuth,bank_controller.postWithdrawl);
router.get("/withdrawlList", checkAuth,bank_controller.getWithdrawlList);
router.get("/withdrawl-admin", checkAuth,checkAdmin,bank_controller.getAdminWithdrawl);
router.post("/withdrawl-admin", checkAuth,checkAdmin,bank_controller.postAdminWithdrawl);
router.post("/recharge", checkAuth,bank_controller.postRecharge);
router.get("/rechargeList", checkAuth,bank_controller.getRechargeList);
router.post("/response-recharge",bank_controller.postResponseRecharge);
router.get("/budget", checkAuth,bank_controller.getBudget);
module.exports = router;
