const express = require("express");
const mongoose = require("mongoose");

const User = require("../models/userdata.js");
const Admins = require("../models/admindata.js");
const CovidResult = require("../models/covidresult.js");

const router = express.Router();

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  console.log("create");
  const newuser = new User({
    name: req.body.name,
    mobile: req.body.mobile,
    pincode: req.body.pincode,
  });
  try {
    await newuser.save();

    res.status(201).json(newuser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const selfAssessment = async (req, res) => {
  // console.log(req.body);
  // console.log("create");
  s = req.body.symptoms;
  t = req.body.travelHistory;
  c = req.body.contactWithCovidPatient;

  try {
    if (s.length === 0 && !t && !c) {
      res.status(201).json({ riskPercentage: 5 });
    }
    if (s.length === 1 && (t || c)) {
      res.status(201).json({ riskPercentage: 50 });
    }
    if (s.length === 2 && (t || c)) {
      res.status(201).json({ riskPercentage: 75 });
    }
    if (s.length > 2 && (t || c)) {
      res.status(201).json({ riskPercentage: 95 });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAdmins = async (req, res) => {
  console.log("called");
  try {
    const admins = await Admins.find();
    console.log(admins);
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const registerAdmin = async (req, res) => {
  console.log(req.body);
  console.log("create");
  const newuser = new Admins({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    pinCode: req.body.pinCode,
  });
  try {
    await newuser.save();

    res.status(201).json({
      name: newuser.name,
      phoneNumber: newuser.phoneNumber,
      pinCode: newuser.pinCode,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// const getZoneInfo = async (req, res) => {
//   //   Sample request - {"pinCode":"111111"}
//   // Sample response - {"numCases":"1","zoneType":"ORANGE"}

//   const pinCodes = await Student.find({pinCode: req.body.pinCode});

//   if(pinCodes.length == )
//   console.log(req.body);
//   console.log("create");
//   const newuser = new Admins({
//     name: req.body.name,
//     phoneNumber: req.body.phoneNumber,
//     pinCode: req.body.pinCode,
//   });
//   try {
//     await newuser.save();

//     res.status(201).json({
//       name: newuser.name,
//       phoneNumber: newuser.phoneNumber,
//       pinCode: newuser.pinCode,
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

const updateCovidResult = async (req, res) => {
  console.log(req.body);
  console.log("create");
  const newuser = new CovidResult({
    userId: req.body.userId,
    adminId: req.body.adminId,
    result: req.body.result,
  });
  try {
    await newuser.save();

    res.status(201).json({ updated: true });
  } catch (error) {
    res.status(400).json({ message: { updated: false } });
  }
};

module.exports.getUsers = getUsers;
module.exports.createUser = createUser;
module.exports.selfAssessment = selfAssessment;
module.exports.registerAdmin = registerAdmin;
module.exports.getAdmins = getAdmins;
// module.exports.getZoneInfo = getZoneInfo;
module.exports.updateCovidResult = updateCovidResult;
