const express = require("express");

const router = express.Router();

router.get("/getallstate", async (req, res) => {
  try {
    const result = [
      {
        _id: 1,
        stateName: "Andhra Pradesh",
        districtList: [
          {
            districtName: "Alluri Sitarama Raju",
          },
          {
            districtName: "Anakapalle",
          },
          {
            districtName: "Ananthapuramu",
          },
          {
            districtName: "Annamayya",
          },
          {
            districtName: "Bapatla",
          },
          {
            districtName: "Chittoor",
          },
          {
            districtName: "East Godavari",
          },
          {
            districtName: "Eluru",
          },
          {
            districtName: "Guntur",
          },
          {
            districtName: "YSR Kadapa (Cuddapah)",
          },
          {
            districtName: "Kakinada",
          },
          {
            districtName: "Konaseema",
          },
          {
            districtName: "Krishna",
          },
          {
            districtName: "Kurnool",
          },
          {
            districtName: "Parvathipuram Manyam",
          },
          {
            districtName: "Nandyal",
          },
          {
            districtName: "NTR",
          },
          {
            districtName: "Palnadu",
          },
          {
            districtName: "Prakasam",
          },
          {
            districtName: "Nellore",
          },
          {
            districtName: "Parvathipuram Manyam",
          },
          {
            districtName: "Nandyal",
          },
          {
            districtName: "Tirupati",
          },
          {
            districtName: "Sri Sathya Sai",
          },
          {
            districtName: "Srikakulam",
          },
          {
            districtName: "Visakhapatnam",
          },
          {
            districtName: "Vizianagaram",
          },
          {
            districtName: "West Godavari",
          },
        ],
      },
      {
        _id: 2,
        stateName: "Delhi",
        districtList: [
          {
            districtName: "Central Delhi",
          },
          {
            districtName: "East Delhi",
          },
          {
            districtName: "New Delhi",
          },
          {
            districtName: "North Delhi",
          },
          {
            districtName: "North East Delhi",
          },
          {
            districtName: "North West Delhi",
          },
          {
            districtName: "Shahdara",
          },
          {
            districtName: "South Delhi",
          },
          {
            districtName: "South East Delhi",
          },
          {
            districtName: "South West Delhi",
          },
          {
            districtName: "West Delhi",
          },
        ],
      },
      {
        _id: 3,
        stateName: "Karnataka",
        districtList: [
          {
            districtName: "Bagalkot",
          },
          {
            districtName: "Bellary",
          },
          {
            districtName: "Belagavi (Begaum)",
          },
          {
            districtName: "Bengaluru",
          },
          {
            districtName: "Chamarajnagar",
          },
          {
            districtName: "Chickballapur",
          },
          {
            districtName: "Chikkamagaluru",
          },
          {
            districtName: "Dakshina Kannada",
          },
          {
            districtName: "Gadag",
          },
          {
            districtName: "Hassan",
          },
          {
            districtName: "Haveri",
          },
          {
            districtName: "Kalaburagi (Gulbaraga)",
          },
          {
            districtName: "Koppal",
          },
          {
            districtName: "Mandya",
          },
          {
            districtName: "Mysuru (Mysore)",
          },
          {
            districtName: "Raichur",
          },
          {
            districtName: "Tumakuru (Tumkur)",
          },
          {
            districtName: "Udupi",
          },
          {
            districtName: "Uttara Kannada (Karwar)",
          },
          {
            districtName: "Vijayapura (Bijapur)",
          },
        ],
      },
      {
        _id: 4,
        stateName: "Kerala",
        districtList: [
          {
            districtName: "Alappuzha",
          },
          {
            districtName: "Ernakulam",
          },
          {
            districtName: "Idukki",
          },
          {
            districtName: "Kannur",
          },
          {
            districtName: "Kasaragod",
          },
          {
            districtName: "Kollam",
          },
          {
            districtName: "Kottayam",
          },
          {
            districtName: "Kozhikode",
          },
          {
            districtName: "Malappuram",
          },
          {
            districtName: "Palakkad",
          },
          {
            districtName: "Pathanamthitta",
          },
          {
            districtName: "Thiruvananthapuram",
          },
          {
            districtName: "Thrissur",
          },
          {
            districtName: "Wayanad",
          },
        ],
      },
      {
        _id: 5,
        stateName: "Maharashtra",
        districtList: [
          {
            districtName: "Ahmednagar",
          },
          {
            districtName: "Akola",
          },
          {
            districtName: "Amravati",
          },
          {
            districtName: "Beed",
          },
          {
            districtName: "Bhandara",
          },
          {
            districtName: "Buldhana",
          },
          {
            districtName: "Chandrapur",
          },
          {
            districtName: "Dhule",
          },
          {
            districtName: "Gadchiroli",
          },
          {
            districtName: "Gondia",
          },
          {
            districtName: "Hingoli",
          },
          {
            districtName: "Jalgaon",
          },
          {
            districtName: "Jalna",
          },
          {
            districtName: "Kolhapur",
          },
          {
            districtName: "Latur",
          },
          {
            districtName: "Mumbai City",
          },
          {
            districtName: "Mumbai Suburban",
          },
          {
            districtName: "Nagpur",
          },
          {
            districtName: "Nanded",
          },
          {
            districtName: "Nandurbar",
          },
          {
            districtName: "Nashik",
          },
          {
            districtName: "Osmanabad",
          },
          {
            districtName: "Palghar",
          },
          {
            districtName: "Parbhani",
          },
          {
            districtName: "Raigad",
          },
          {
            districtName: "Ratnagiri",
          },
          {
            districtName: "Sangli",
          },
          {
            districtName: "Satara",
          },
          {
            districtName: "Sindhudurg",
          },
          {
            districtName: "Solapur",
          },
          {
            districtName: "Thane",
          },
          {
            districtName: "Wardha",
          },
          {
            districtName: "Washim",
          },
          {
            districtName: "Yavatmal",
          },
          {
            districtName: "Aurangabad",
          },
        ],
      },
      {
        _id: 6,
        stateName: "Orrisa",
        districtList: [
          {
            districtName: "Angul",
          },
          {
            districtName: "Balangir",
          },
          {
            districtName: "Balasore",
          },
          {
            districtName: "Bargarh",
          },
          {
            districtName: "Bhadrak",
          },
          {
            districtName: "Boudh",
          },
          {
            districtName: "Cuttack",
          },
          {
            districtName: "Deogarh",
          },
          {
            districtName: "Dhenkanal",
          },
          {
            districtName: "Gajapati",
          },
          {
            districtName: "Ganjam",
          },
          {
            districtName: "Jagatsinghapur",
          },
          {
            districtName: "Jajpur",
          },
          {
            districtName: "Jharsuguda",
          },
          {
            districtName: "Kalahandi",
          },
          {
            districtName: "Kandhamal",
          },
          {
            districtName: "Kendrapara",
          },
          {
            districtName: "Kendujhar (Keonjhar)",
          },
          {
            districtName: "Khordha",
          },
          {
            districtName: "Koraput",
          },
          {
            districtName: "Malkangiri",
          },
          {
            districtName: "Mayurbhanj",
          },
          {
            districtName: "Nabarangpur",
          },
          {
            districtName: "Nayagarh",
          },
          {
            districtName: "Nuapada",
          },
          {
            districtName: "Puri",
          },
          {
            districtName: "Rayagada",
          },
          {
            districtName: "Sambalpur",
          },
          {
            districtName: "Subarnapur",
          },
          {
            districtName: "Sundargarh",
          },
        ],
      },
    ];
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
