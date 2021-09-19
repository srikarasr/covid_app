const express = require("express");

const user_Act = require("../controllers/users");

const router = express.Router();

router.get("/users", user_Act.getUsers);
router.post("/registerUser", user_Act.createUser);
router.post("/selfAssessment", user_Act.selfAssessment);
router.post("/registerAdmin", user_Act.registerAdmin);
router.get("/admins", user_Act.getAdmins);
// router.post("/getZoneInfo", user_Act.getZoneInfo);
router.post("/updateCovidResult", user_Act.updateCovidResult);

module.exports = router;
