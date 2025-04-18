import { useState } from "react";
import LiveStatus from "../ResultsComponents/LiveStatus";
import axios from "axios";
import Loading from "./Loading";
import ErrorMessage from "./ErrorTemplate";
export default function TrainLiveStatus() {
  const [trainNumber, setTrainNumber] = useState("");
  const [tdata, setTdata] = useState(null);
  const [loading ,setLoading]=useState(false)
  const apiKey = import.meta.env.VITE_API_KEY;
  const [invalidIp,setInvalidIp]=useState(false)
  const [isSubmitted,setIsSubmitted]=useState(false)
  const [error,setError]=useState(false)
  
//   const tdata={
//     "journey_time": 1015,
//     "seo_train_name": "Jp Bpl Express",
//     "is_run_day": true,
//     "data_from": "railyatri",
//     "train_name": "Jaipur - Bhopal Express",
//     "ahead_distance": 18,
//     "status_as_of_min": 5,
//     "current_station_code": "KSH",
//     "user_id": 0,
//     "etd": "09:06",
//     "success": true,
//     "run_days": "MON,TUE,WED,THU,FRI,SAT,SUN",
//     "previous_stations": [
//         {
//             "stoppage_number": 1,
//             "std": "18:25",
//             "station_name": "JAIPUR",
//             "station_lng": 75.786953,
//             "station_lat": 26.920233,
//             "station_code": "JP",
//             "state_code": "RJ",
//             "sta": "18:25",
//             "smart_city_id": null,
//             "si_no": 1,
//             "platform_number": 2,
//             "non_stops": [],
//             "halt": 0,
//             "etd": "18:25",
//             "eta": "18:25",
//             "distance_from_source": 0,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 2,
//             "std": "18:39",
//             "station_name": "KANAKPURA",
//             "station_lng": 75.702839,
//             "station_lat": 26.92911,
//             "station_code": "KKU",
//             "state_code": "RJ",
//             "sta": "18:37",
//             "smart_city_id": null,
//             "si_no": 2,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "BINDAYAKA",
//                     "station_code": "BDYK",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 3,
//                     "distance_from_source": 14
//                 },
//                 {
//                     "std": "",
//                     "station_name": "DHANAKYA",
//                     "station_code": "DNK",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 4,
//                     "distance_from_source": 19
//                 },
//                 {
//                     "std": "",
//                     "station_name": "SHEO SINGH PURA",
//                     "station_code": "SHNX",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 5,
//                     "distance_from_source": 23
//                 },
//                 {
//                     "std": "",
//                     "station_name": "BOBAS",
//                     "station_code": "BOBS",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 6,
//                     "distance_from_source": 29
//                 }
//             ],
//             "halt": 0,
//             "etd": "18:39",
//             "eta": "18:37",
//             "distance_from_source": 9,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 3,
//             "std": "19:02",
//             "station_name": "ASALPUR JOBNER",
//             "station_lng": 75.423717,
//             "station_lat": 26.900334,
//             "station_code": "JOB",
//             "state_code": "RJ",
//             "sta": "19:00",
//             "smart_city_id": null,
//             "si_no": 7,
//             "platform_number": 2,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "DHINDA",
//                     "station_code": "DHND",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 8,
//                     "distance_from_source": 42
//                 }
//             ],
//             "halt": 0,
//             "etd": "19:02",
//             "eta": "19:00",
//             "distance_from_source": 37,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 4,
//             "std": "19:14",
//             "station_name": "HIRNODA",
//             "station_lng": 75.327759,
//             "station_lat": 26.885636,
//             "station_code": "HDA",
//             "state_code": "RJ",
//             "sta": "19:12",
//             "smart_city_id": null,
//             "si_no": 9,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 0,
//             "etd": "19:14",
//             "eta": "19:12",
//             "distance_from_source": 47,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 5,
//             "std": "19:29",
//             "station_name": "PHULERA JN",
//             "station_lng": 75.245876,
//             "station_lat": 26.873234,
//             "station_code": "FL",
//             "state_code": "RJ",
//             "sta": "19:27",
//             "smart_city_id": null,
//             "si_no": 10,
//             "platform_number": 4,
//             "non_stops": [],
//             "halt": 0,
//             "etd": "19:29",
//             "eta": "19:27",
//             "distance_from_source": 55,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 6,
//             "std": "19:42",
//             "station_name": "NARAINA",
//             "station_lng": 75.192889,
//             "station_lat": 26.796324,
//             "station_code": "NRI",
//             "state_code": "RJ",
//             "sta": "19:40",
//             "smart_city_id": null,
//             "si_no": 11,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "DANTRA",
//                     "station_code": "DTRA",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 12,
//                     "distance_from_source": 70
//                 },
//                 {
//                     "std": "",
//                     "station_name": "SAKHUN",
//                     "station_code": "SK",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 13,
//                     "distance_from_source": 77
//                 },
//                 {
//                     "std": "",
//                     "station_name": "SALI",
//                     "station_code": "SALI",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 14,
//                     "distance_from_source": 84
//                 },
//                 {
//                     "std": "",
//                     "station_name": "GAHLOTA",
//                     "station_code": "GLTA",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 15,
//                     "distance_from_source": 91
//                 },
//                 {
//                     "std": "",
//                     "station_name": "TILONIYA",
//                     "station_code": "TL",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 16,
//                     "distance_from_source": 95
//                 },
//                 {
//                     "std": "",
//                     "station_name": "MANDAWARIYA",
//                     "station_code": "MNDV",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 17,
//                     "distance_from_source": 100
//                 }
//             ],
//             "halt": 0,
//             "etd": "19:42",
//             "eta": "19:40",
//             "distance_from_source": 65,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 7,
//             "std": "20:14",
//             "station_name": "KISHANGARH",
//             "station_lng": 74.856033,
//             "station_lat": 26.589448,
//             "station_code": "KSG",
//             "state_code": "RJ",
//             "sta": "20:12",
//             "smart_city_id": null,
//             "si_no": 18,
//             "platform_number": 2,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "GEGAL AKHRI",
//                     "station_code": "GEK",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 19,
//                     "distance_from_source": 116
//                 },
//                 {
//                     "std": "",
//                     "station_name": "LADPURA",
//                     "station_code": "LR",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 20,
//                     "distance_from_source": 122
//                 }
//             ],
//             "halt": 0,
//             "etd": "20:14",
//             "eta": "20:12",
//             "distance_from_source": 110,
//             "arrival_delay": 0,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 8,
//             "std": "20:35",
//             "station_name": "MADAR JN",
//             "station_lng": 74.686947,
//             "station_lat": 26.464734,
//             "station_code": "MDJN",
//             "state_code": "RJ",
//             "sta": "20:33",
//             "smart_city_id": null,
//             "si_no": 21,
//             "platform_number": 2,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "MADAR",
//                     "station_code": "MD",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 22,
//                     "distance_from_source": 128
//                 }
//             ],
//             "halt": 2,
//             "etd": "21:14",
//             "eta": "21:12",
//             "distance_from_source": 128,
//             "arrival_delay": 39,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 9,
//             "std": "21:05",
//             "station_name": "AJMER JN",
//             "station_lng": 74.637594,
//             "station_lat": 26.456742,
//             "station_code": "AII",
//             "state_code": "RJ",
//             "sta": "20:55",
//             "smart_city_id": null,
//             "si_no": 23,
//             "platform_number": 4,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "ADARSHNAGAR",
//                     "station_code": "AHO",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 24,
//                     "distance_from_source": 141
//                 },
//                 {
//                     "std": "",
//                     "station_name": "HATUNDI",
//                     "station_code": "HTD",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 25,
//                     "distance_from_source": 146
//                 },
//                 {
//                     "std": "",
//                     "station_name": "LACHHIPURA",
//                     "station_code": "LAC",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 26,
//                     "distance_from_source": 150
//                 },
//                 {
//                     "std": "",
//                     "station_name": "RAJOSI",
//                     "station_code": "ROS",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 27,
//                     "distance_from_source": 153
//                 }
//             ],
//             "halt": 3,
//             "etd": "21:47",
//             "eta": "21:44",
//             "distance_from_source": 135,
//             "arrival_delay": 49,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 10,
//             "std": "21:33",
//             "station_name": "NASIRABAD",
//             "station_lng": 74.717331,
//             "station_lat": 26.2948,
//             "station_code": "NSD",
//             "state_code": "RJ",
//             "sta": "21:31",
//             "smart_city_id": null,
//             "si_no": 28,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 2,
//             "etd": "22:02",
//             "eta": "22:00",
//             "distance_from_source": 158,
//             "arrival_delay": 29,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 11,
//             "std": "21:50",
//             "station_name": "BANDANWARA",
//             "station_lng": 74.6913886,
//             "station_lat": 26.1253108,
//             "station_code": "BDW",
//             "state_code": "RJ",
//             "sta": "21:48",
//             "smart_city_id": null,
//             "si_no": 29,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 2,
//             "etd": "22:22",
//             "eta": "22:20",
//             "distance_from_source": 178,
//             "arrival_delay": 32,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 12,
//             "std": "22:12",
//             "station_name": "BIJAINAGAR",
//             "station_lng": 74.6526689,
//             "station_lat": 25.930613,
//             "station_code": "BJNR",
//             "state_code": "RJ",
//             "sta": "22:10",
//             "smart_city_id": null,
//             "si_no": 30,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "GULABPURA",
//                     "station_code": "GBP",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 31,
//                     "distance_from_source": 203
//                 },
//                 {
//                     "std": "",
//                     "station_name": "MANDAL",
//                     "station_code": "MDL",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 32,
//                     "distance_from_source": 256
//                 }
//             ],
//             "halt": 4,
//             "etd": "22:56",
//             "eta": "22:52",
//             "distance_from_source": 200,
//             "arrival_delay": 42,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 13,
//             "std": "23:15",
//             "station_name": "BHILWARA",
//             "station_lng": 74.6312534,
//             "station_lat": 25.3440308,
//             "station_code": "BHL",
//             "state_code": "RJ",
//             "sta": "23:10",
//             "smart_city_id": null,
//             "si_no": 33,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "MANDPIYA",
//                     "station_code": "MDPA",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 34,
//                     "distance_from_source": 277
//                 },
//                 {
//                     "std": "",
//                     "station_name": "HAMIRGARH",
//                     "station_code": "HMG",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 35,
//                     "distance_from_source": 285
//                 },
//                 {
//                     "std": "",
//                     "station_name": "SONIYANA",
//                     "station_code": "SNYN",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 36,
//                     "distance_from_source": 292
//                 },
//                 {
//                     "std": "",
//                     "station_name": "GANGRAR",
//                     "station_code": "GGR",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 37,
//                     "distance_from_source": 299
//                 },
//                 {
//                     "std": "",
//                     "station_name": "DET",
//                     "station_code": "DET",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 38,
//                     "distance_from_source": 306
//                 }
//             ],
//             "halt": 5,
//             "etd": "23:23",
//             "eta": "23:18",
//             "distance_from_source": 267,
//             "arrival_delay": 8,
//             "a_day": 0
//         },
//         {
//             "stoppage_number": 14,
//             "std": "00:22",
//             "station_name": "CHANDERIYA",
//             "station_lng": 74.629869,
//             "station_lat": 24.939448,
//             "station_code": "CNA",
//             "state_code": "RJ",
//             "sta": "00:20",
//             "smart_city_id": null,
//             "si_no": 39,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "BERACH JN CABIN",
//                     "station_code": "BEC",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 40,
//                     "distance_from_source": 317
//                 },
//                 {
//                     "std": "",
//                     "station_name": "XX-BECE",
//                     "station_code": "XX-BECE",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 41,
//                     "distance_from_source": 318
//                 }
//             ],
//             "halt": 4,
//             "etd": "00:26",
//             "eta": "00:22",
//             "distance_from_source": 313,
//             "arrival_delay": 2,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 15,
//             "std": "00:45",
//             "station_name": "CHITTAURGARH",
//             "station_lng": 74.623947,
//             "station_lat": 24.874601,
//             "station_code": "COR",
//             "state_code": "RJ",
//             "sta": "00:35",
//             "smart_city_id": null,
//             "si_no": 42,
//             "platform_number": 4,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "ORDI",
//                     "station_code": "ORDI",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 43,
//                     "distance_from_source": 327
//                 },
//                 {
//                     "std": "",
//                     "station_name": "SHAMBHUPURA",
//                     "station_code": "SMP",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 44,
//                     "distance_from_source": 333
//                 },
//                 {
//                     "std": "",
//                     "station_name": "GAMBHIRI ROAD",
//                     "station_code": "GRF",
//                     "state_code": "RJ",
//                     "sta": "",
//                     "si_no": 45,
//                     "distance_from_source": 342
//                 }
//             ],
//             "halt": 10,
//             "etd": "00:52",
//             "eta": "00:42",
//             "distance_from_source": 321,
//             "arrival_delay": 7,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 16,
//             "std": "01:12",
//             "station_name": "NIMBAHERA",
//             "station_lng": 74.694672,
//             "station_lat": 24.623612,
//             "station_code": "NBH",
//             "state_code": "RJ",
//             "sta": "01:10",
//             "smart_city_id": null,
//             "si_no": 46,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 2,
//             "etd": "01:24",
//             "eta": "01:22",
//             "distance_from_source": 350,
//             "arrival_delay": 12,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 17,
//             "std": "01:24",
//             "station_name": "JAWAD ROAD",
//             "station_lng": 74.764709,
//             "station_lat": 24.557897,
//             "station_code": "JWO",
//             "state_code": "RJ",
//             "sta": "01:23",
//             "smart_city_id": null,
//             "si_no": 47,
//             "platform_number": 2,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "BISALWAS KALAN",
//                     "station_code": "BIWK",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 48,
//                     "distance_from_source": 367
//                 }
//             ],
//             "halt": 1,
//             "etd": "01:36",
//             "eta": "01:35",
//             "distance_from_source": 360,
//             "arrival_delay": 12,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 18,
//             "std": "01:48",
//             "station_name": "NIMACH",
//             "station_lng": 74.853115,
//             "station_lat": 24.459963,
//             "station_code": "NMH",
//             "state_code": "MP",
//             "sta": "01:46",
//             "smart_city_id": null,
//             "si_no": 49,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "HARKIA KHAL",
//                     "station_code": "HKL",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 50,
//                     "distance_from_source": 390
//                 },
//                 {
//                     "std": "",
//                     "station_name": "MALHARGARH",
//                     "station_code": "MLG",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 51,
//                     "distance_from_source": 403
//                 }
//             ],
//             "halt": 2,
//             "etd": "01:59",
//             "eta": "01:57",
//             "distance_from_source": 377,
//             "arrival_delay": 11,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 19,
//             "std": "02:20",
//             "station_name": "PIPLIA",
//             "station_lng": 75.007353,
//             "station_lat": 24.203563,
//             "station_code": "PIP",
//             "state_code": "MP",
//             "sta": "02:19",
//             "smart_city_id": null,
//             "si_no": 52,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 1,
//             "etd": "02:31",
//             "eta": "02:30",
//             "distance_from_source": 410,
//             "arrival_delay": 11,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 20,
//             "std": "02:35",
//             "station_name": "MANDASOR",
//             "station_lng": 75.076103,
//             "station_lat": 24.075697,
//             "station_code": "MDS",
//             "state_code": "MP",
//             "sta": "02:30",
//             "smart_city_id": null,
//             "si_no": 53,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 5,
//             "etd": "02:53",
//             "eta": "02:48",
//             "distance_from_source": 426,
//             "arrival_delay": 18,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 21,
//             "std": "03:00",
//             "station_name": "DALAUDA",
//             "station_lng": 75.105801,
//             "station_lat": 23.949077,
//             "station_code": "DLD",
//             "state_code": "MP",
//             "sta": "02:59",
//             "smart_city_id": null,
//             "si_no": 54,
//             "platform_number": 0,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "DHODHAR",
//                     "station_code": "DOD",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 55,
//                     "distance_from_source": 460
//                 }
//             ],
//             "halt": 1,
//             "etd": "03:08",
//             "eta": "03:07",
//             "distance_from_source": 440,
//             "arrival_delay": 8,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 22,
//             "std": "03:24",
//             "station_name": "JAORA",
//             "station_lng": 75.115242,
//             "station_lat": 23.627383,
//             "station_code": "JAO",
//             "state_code": "MP",
//             "sta": "03:22",
//             "smart_city_id": null,
//             "si_no": 56,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "BRAYLA CHAURASI",
//                     "station_code": "BRLA",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 57,
//                     "distance_from_source": 486
//                 },
//                 {
//                     "std": "",
//                     "station_name": "NAMLI",
//                     "station_code": "NLI",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 58,
//                     "distance_from_source": 497
//                 },
//                 {
//                     "std": "",
//                     "station_name": "NITYANAND DHAM",
//                     "station_code": "NTDM",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 59,
//                     "distance_from_source": 502
//                 },
//                 {
//                     "std": "",
//                     "station_name": "DHOSAWAS",
//                     "station_code": "DHWS",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 60,
//                     "distance_from_source": 507
//                 }
//             ],
//             "halt": 2,
//             "etd": "03:51",
//             "eta": "03:49",
//             "distance_from_source": 477,
//             "arrival_delay": 27,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 23,
//             "std": "05:20",
//             "station_name": "RATLAM JN",
//             "station_lng": 75.051126,
//             "station_lat": 23.34068,
//             "station_code": "RTM",
//             "state_code": "MP",
//             "sta": "05:05",
//             "smart_city_id": null,
//             "si_no": 61,
//             "platform_number": 2,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "BANGROD",
//                     "station_code": "BOD",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 62,
//                     "distance_from_source": 520
//                 },
//                 {
//                     "std": "",
//                     "station_name": "RUNKHERA",
//                     "station_code": "RNH",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 63,
//                     "distance_from_source": 528
//                 }
//             ],
//             "halt": 10,
//             "etd": "05:20",
//             "eta": "05:10",
//             "distance_from_source": 510,
//             "arrival_delay": 5,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 24,
//             "std": "05:59",
//             "station_name": "KHACHROD",
//             "station_lng": 75.286517,
//             "station_lat": 23.442853,
//             "station_code": "KUH",
//             "state_code": "MP",
//             "sta": "05:57",
//             "smart_city_id": null,
//             "si_no": 64,
//             "platform_number": 2,
//             "non_stops": [],
//             "halt": 2,
//             "etd": "06:02",
//             "eta": "06:00",
//             "distance_from_source": 537,
//             "arrival_delay": 3,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 25,
//             "std": "06:30",
//             "station_name": "NAGDA JN",
//             "station_lng": 75.412731,
//             "station_lat": 23.45616,
//             "station_code": "NAD",
//             "state_code": "MP",
//             "sta": "06:28",
//             "smart_city_id": null,
//             "si_no": 65,
//             "platform_number": 2,
//             "non_stops": [],
//             "halt": 2,
//             "etd": "06:35",
//             "eta": "06:33",
//             "distance_from_source": 551,
//             "arrival_delay": 5,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 26,
//             "std": "07:30",
//             "station_name": "UJJAIN JN",
//             "station_lng": 75.781803,
//             "station_lat": 23.178554,
//             "station_code": "UJN",
//             "state_code": "MP",
//             "sta": "07:20",
//             "smart_city_id": null,
//             "si_no": 66,
//             "platform_number": 5,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "UJN C CABIN",
//                     "station_code": "UJNC",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 67,
//                     "distance_from_source": 608
//                 },
//                 {
//                     "std": "",
//                     "station_name": "PINGLESHWAR",
//                     "station_code": "PLW",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 68,
//                     "distance_from_source": 615
//                 },
//                 {
//                     "std": "",
//                     "station_name": "TAJPUR",
//                     "station_code": "TJP",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 69,
//                     "distance_from_source": 622
//                 },
//                 {
//                     "std": "",
//                     "station_name": "SHIVPURA",
//                     "station_code": "SVT",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 70,
//                     "distance_from_source": 631
//                 },
//                 {
//                     "std": "",
//                     "station_name": "TARANA ROAD",
//                     "station_code": "TAN",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 71,
//                     "distance_from_source": 638
//                 }
//             ],
//             "halt": 3,
//             "etd": "07:31",
//             "eta": "07:28",
//             "distance_from_source": 606,
//             "arrival_delay": 8,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 27,
//             "std": "08:10",
//             "station_name": "MAKSI",
//             "station_lng": 76.159286,
//             "station_lat": 23.251795,
//             "station_code": "MKC",
//             "state_code": "MP",
//             "sta": "08:08",
//             "smart_city_id": null,
//             "si_no": 72,
//             "platform_number": 1,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "PIR UMROD",
//                     "station_code": "PUO",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 73,
//                     "distance_from_source": 654
//                 }
//             ],
//             "halt": 4,
//             "etd": "08:25",
//             "eta": "08:21",
//             "distance_from_source": 647,
//             "arrival_delay": 13,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 28,
//             "std": "08:29",
//             "station_name": "BERCHHA",
//             "station_lng": 76.3346029,
//             "station_lat": 23.2828908,
//             "station_code": "BCH",
//             "state_code": "MP",
//             "sta": "08:27",
//             "smart_city_id": null,
//             "si_no": 74,
//             "platform_number": 1,
//             "non_stops": [],
//             "halt": 2,
//             "etd": "08:48",
//             "eta": "08:46",
//             "distance_from_source": 666,
//             "arrival_delay": 19,
//             "a_day": 1
//         }
//     ],
//     "new_alert_id": 0,
//     "delay": 23,
//     "eta": "09:05",
//     "ahead_distance_text": "18 kms ahead",
//     "destination": "BPL",
//     "total_distance": 790,
//     "related_alert": 0,
//     "instance_alert": 0,
//     "current_location_info": [
//         {
//             "type": 1,
//             "readable_message": "Departed from kali sindh at 09:06",
//             "message": "Departed from KALI SINDH. at 09:06",
//             "label": "As of 5 mins ago",
//             "img_url": "",
//             "hint": "Delay 23m",
//             "deeplink": ""
//         },
//         {
//             "type": 4,
//             "readable_message": "18 kilometers ahead of kali sindh",
//             "message": "18 kms ahead of KALI SINDH.",
//             "label": "As of 5 mins ago",
//             "img_url": "",
//             "hint": "Travelling East",
//             "deeplink": ""
//         }
//     ],
//     "at_src": false,
//     "cur_stn_sta": "08:42",
//     "si_no": 75,
//     "spent_time": 0.191,
//     "late_update": false,
//     "avg_speed": 0,
//     "at_dstn": false,
//     "is_ry_eta": true,
//     "train_number": "19711",
//     "current_state_code": "MP",
//     "at_src_dstn": false,
//     "new_alert_msg": "",
//     "smart_city_id": null,
//     "cur_stn_std": "08:43",
//     "upcoming_stations": [
//         {
//             "stoppage_number": 30,
//             "std": "09:00",
//             "station_name": "AKODIA",
//             "station_lng": 76.599255,
//             "station_lat": 23.378265,
//             "station_code": "AKD",
//             "state_code": "MP",
//             "sta": "08:58",
//             "smart_city_id": null,
//             "si_no": 76,
//             "platform_number": 1,
//             "on_time_rating": 2,
//             "non_stops": [],
//             "halt": 2,
//             "food_available": false,
//             "etd": "09:14",
//             "eta_a_min": 1992,
//             "eta": "09:12",
//             "distance_from_source": 696,
//             "distance_from_current_station_txt": "Arriving...",
//             "distance_from_current_station": 0,
//             "day": 1,
//             "arrival_delay": 14,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 31,
//             "std": "09:15",
//             "station_name": "SHUJALPUR",
//             "station_lng": 76.723065,
//             "station_lat": 23.380826,
//             "station_code": "SJP",
//             "state_code": "MP",
//             "sta": "09:13",
//             "smart_city_id": null,
//             "si_no": 77,
//             "platform_number": 2,
//             "on_time_rating": 2,
//             "non_stops": [],
//             "halt": 2,
//             "food_available": false,
//             "etd": "09:33",
//             "eta_a_min": 2011,
//             "eta": "09:31",
//             "distance_from_source": 709,
//             "distance_from_current_station_txt": "Next stop 13 kms to go",
//             "distance_from_current_station": 13,
//             "day": 1,
//             "arrival_delay": 18,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 32,
//             "std": "09:29",
//             "station_name": "KALAPIPAL",
//             "station_lng": 76.834302,
//             "station_lat": 23.333075,
//             "station_code": "KPP",
//             "state_code": "MP",
//             "sta": "09:28",
//             "smart_city_id": null,
//             "si_no": 78,
//             "platform_number": 1,
//             "on_time_rating": 2,
//             "non_stops": [
//                 {
//                     "std": "",
//                     "station_name": "PARBATI",
//                     "station_code": "PRB",
//                     "state_code": "MP",
//                     "sta": "",
//                     "si_no": 79,
//                     "distance_from_source": 737
//                 }
//             ],
//             "halt": 2,
//             "food_available": false,
//             "etd": "09:46",
//             "eta_a_min": 2024,
//             "eta": "09:44",
//             "distance_from_source": 722,
//             "distance_from_current_station_txt": "Next stop 26 kms to go",
//             "distance_from_current_station": 26,
//             "day": 1,
//             "arrival_delay": 16,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 33,
//             "std": "09:52",
//             "station_name": "SEHORE",
//             "station_lng": 77.077632,
//             "station_lat": 23.214845,
//             "station_code": "SEH",
//             "state_code": "MP",
//             "sta": "09:50",
//             "smart_city_id": null,
//             "si_no": 80,
//             "platform_number": 2,
//             "on_time_rating": 2,
//             "non_stops": [],
//             "halt": 2,
//             "food_available": false,
//             "etd": "10:11",
//             "eta_a_min": 2049,
//             "eta": "10:09",
//             "distance_from_source": 751,
//             "distance_from_current_station_txt": "Next stop 55 kms to go",
//             "distance_from_current_station": 55,
//             "day": 1,
//             "arrival_delay": 19,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 34,
//             "std": "10:52",
//             "station_name": "SANT HIRDARAM NAGAR",
//             "station_lng": 77.335391,
//             "station_lat": 23.273919,
//             "station_code": "SHRN",
//             "state_code": "MP",
//             "sta": "10:50",
//             "smart_city_id": null,
//             "si_no": 81,
//             "platform_number": 1,
//             "on_time_rating": 10,
//             "non_stops": [],
//             "halt": 2,
//             "food_available": true,
//             "etd": "10:52",
//             "eta_a_min": 2090,
//             "eta": "10:50",
//             "distance_from_source": 779,
//             "distance_from_current_station_txt": "Next stop 83 kms to go",
//             "distance_from_current_station": 83,
//             "day": 1,
//             "arrival_delay": 0,
//             "a_day": 1
//         },
//         {
//             "stoppage_number": 35,
//             "std": "11:20",
//             "station_name": "BHOPAL JN",
//             "station_lng": 77.4132728577,
//             "station_lat": 23.2670143843,
//             "station_code": "BPL",
//             "state_code": "MP",
//             "sta": "11:20",
//             "smart_city_id": null,
//             "si_no": 82,
//             "platform_number": 6,
//             "on_time_rating": 9,
//             "non_stops": [],
//             "halt": 0,
//             "food_available": true,
//             "etd": "11:20",
//             "eta_a_min": 2120,
//             "eta": "11:20",
//             "distance_from_source": 790,
//             "distance_from_current_station_txt": "Next stop 94 kms to go",
//             "distance_from_current_station": 94,
//             "day": 1,
//             "arrival_delay": 0,
//             "a_day": 1
//         }
//     ],
//     "source": "JP",
//     "std": "2024-02-24 18:25",
//     "a_day": 1,
//     "update_time": "2024-02-25T09:11:00Z",
//     "train_start_date": "2024-02-24",
//     "platform_number": 1,
//     "ir_train_name": "Jaipur - Bhopal Express",
//     "status": "D",
//     "distance_from_source": 696,
//     "status_as_of": "As of 5 mins ago",
//     "notification_date": "2024-02-25",
//     "stoppage_number": 29,
//     "current_station_name": "KALI SINDH."
// }


  const handleSubmit = async(e) => {
    e.preventDefault();
setLoading(true)
    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching live status for train:", trainNumber);
    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus',
        params: {
          trainNo: trainNumber,
          startDay: '1'
         
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          console.log(response.data.message, response.data.data?.message);
          console.log(response.data.data?.new_message);

          if(response.data.message==="Success" 
            && response.data.data?.message==="This train has already expired"
          ){
            setInvalidIp(true)
          }
          else if(response.data.data?.new_message)
          {
            setInvalidIp(true)
          }
          else{
          setTdata(response.data.data)
          return response.data;
          }
      } catch (error) {
        setError(true)
          console.error(error);
      }
      finally{
        setLoading(false)
        setIsSubmitted(true)
      }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">
      { !isSubmitted&& !tdata &&  <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Train Live Status
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Train Number
          </label>
          <input
            type="text"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            placeholder="e.g. 12951"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Get Live Status
        </button>
      </form>}

      {/* {
        console.log(tdata)
      } */}
      {loading && <Loading/>}
     {/* {tdata && <LiveStatus trainData={tdata}/>} */}

         {/* invalid input */}
         {invalidIp ? <ErrorMessage type="invalidInput"/>:
      // rate limit error
      error ? <ErrorMessage type="rateLimit"/> : 
      // some other error
      !error  && !tdata && isSubmitted   ? <ErrorMessage type="default"/> : 
      // successful response
      tdata && <LiveStatus trainData={tdata}/>}

    </div>
  );
}
