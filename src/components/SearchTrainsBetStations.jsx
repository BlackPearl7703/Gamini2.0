import { useState } from "react";
import StationInput from "./StationInput";
import { data } from "../Data/StationName&Code";
import TrainSearchResults from "../ResultsComponents/TrainSearch";
import axios from "axios";
import Loading from "./Loading";
import ErrorMessage from "./ErrorTemplate";
export default function SearchTrains() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [loading,setLoading] = useState(false);
  const [sdata,setSdata]=useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const [invalidIp,setInvalidIp]=useState(false)
  const [isSubmitted,setIsSubmitted]=useState(false)
  const [error,setError]=useState(false)

    const handleSourceSuggestionClick = (station) => {
      setSource(station);
      setSourceSuggestions([]);
    };

    

  //   const sdata=[
  //     {
  //         "train_number": "12962",
  //         "train_name": "Avantika SF Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "MMCT",
  //         "from_std": "17:40",
  //         "from_sta": "17:40",
  //         "local_train_from_sta": 1060,
  //         "to_sta": "18:06",
  //         "to_std": "18:08",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 25,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 10,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S",
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "20155",
  //         "train_name": "Dr. Ambedkar Nagar - New Delhi SF Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "DADN",
  //         "train_dstn": "NDLS",
  //         "from_std": "16:00",
  //         "from_sta": "15:50",
  //         "local_train_from_sta": 950,
  //         "to_sta": "16:26",
  //         "to_std": "16:28",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 38,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 25,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 10,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "22191",
  //         "train_name": "INDB JBP SF EXP",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "JBP",
  //         "from_std": "19:30",
  //         "from_sta": "19:30",
  //         "local_train_from_sta": 1170,
  //         "to_sta": "19:56",
  //         "to_std": "19:58",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 25,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 10,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S",
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "19303",
  //         "train_name": "Indore - Bhopal Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "BPL",
  //         "from_std": "23:15",
  //         "from_sta": "23:15",
  //         "local_train_from_sta": 1395,
  //         "to_sta": "23:41",
  //         "to_std": "23:43",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 25,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 10,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A"
  //         ]
  //     },
  //     {
  //         "train_number": "22944",
  //         "train_name": "INDORE - DAUND SF Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "DD",
  //         "from_std": "16:30",
  //         "from_sta": "16:30",
  //         "local_train_from_sta": 990,
  //         "to_sta": "16:56",
  //         "to_std": "16:58",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 25,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 10,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "19307",
  //         "train_name": "Indore - Una Himachal Express",
  //         "run_days": [
  //             "Thu",
  //             "Fri"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "UHL",
  //         "from_std": "05:30",
  //         "from_sta": "05:30",
  //         "local_train_from_sta": 330,
  //         "to_sta": "05:56",
  //         "to_std": "05:58",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 25,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 10,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "12415",
  //         "train_name": "Intercity SF Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "NDLS",
  //         "from_std": "17:10",
  //         "from_sta": "17:10",
  //         "local_train_from_sta": 1030,
  //         "to_sta": "17:36",
  //         "to_std": "17:38",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "INT",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "12465",
  //         "train_name": "Ranthambhore SF Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "BGKT",
  //         "from_std": "06:00",
  //         "from_sta": "06:00",
  //         "local_train_from_sta": 360,
  //         "to_sta": "06:26",
  //         "to_std": "06:28",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "SUF",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A"
  //         ]
  //     },
  //     {
  //         "train_number": "19310",
  //         "train_name": "Shanti Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "GNC",
  //         "from_std": "23:00",
  //         "from_sta": "23:00",
  //         "local_train_from_sta": 1380,
  //         "to_sta": "23:26",
  //         "to_std": "23:28",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S",
  //             "SL",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "22911",
  //         "train_name": "Shipra Express",
  //         "run_days": [
  //             "Tue",
  //             "Thu",
  //             "Sat"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "HWH",
  //         "from_std": "23:30",
  //         "from_sta": "23:30",
  //         "local_train_from_sta": 1410,
  //         "to_sta": "23:56",
  //         "to_std": "23:58",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "SUF",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "19315",
  //         "train_name": "VIRBHUMI EXP",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "ASV",
  //         "from_std": "17:55",
  //         "from_sta": "17:55",
  //         "local_train_from_sta": 1075,
  //         "to_sta": "18:21",
  //         "to_std": "18:23",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:26",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "22984",
  //         "train_name": "INDB KOTA SF EX",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "KOTA",
  //         "from_std": "15:35",
  //         "from_sta": "15:35",
  //         "local_train_from_sta": 935,
  //         "to_sta": "16:03",
  //         "to_std": "16:05",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:28",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S",
  //             "CC"
  //         ]
  //     },
  //     {
  //         "train_number": "14319",
  //         "train_name": "Indore - Bareilly Weekly Express",
  //         "run_days": [
  //             "Thu"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "BE",
  //         "from_std": "16:45",
  //         "from_sta": "16:45",
  //         "local_train_from_sta": 1005,
  //         "to_sta": "17:13",
  //         "to_std": "17:15",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:28",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 23,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 8,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S",
  //             "SL",
  //             "3A",
  //             "2A"
  //         ]
  //     },
  //     {
  //         "train_number": "18233",
  //         "train_name": "Narmada Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "BSP",
  //         "from_std": "16:00",
  //         "from_sta": "16:00",
  //         "local_train_from_sta": 960,
  //         "to_sta": "16:28",
  //         "to_std": "16:30",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39.08,
  //         "duration": "0:28",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 21,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 1,
  //         "score_duration": 6,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "12919",
  //         "train_name": "Malwa SF Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "DADN",
  //         "train_dstn": "SVDK",
  //         "from_std": "12:15",
  //         "from_sta": "12:05",
  //         "local_train_from_sta": 725,
  //         "to_sta": "12:51",
  //         "to_std": "12:53",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 38,
  //         "duration": "0:36",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 21,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": true,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 2,
  //         "score_duration": 6,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A"
  //         ]
  //     },
  //     {
  //         "train_number": "19323",
  //         "train_name": "BPL INTERCITY",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "DADN",
  //         "train_dstn": "BPL",
  //         "from_std": "06:40",
  //         "from_sta": "06:35",
  //         "local_train_from_sta": 395,
  //         "to_sta": "07:18",
  //         "to_std": "07:20",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 38,
  //         "duration": "0:38",
  //         "special_train": false,
  //         "train_type": "MAIL EXPRESS",
  //         "score": 21,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 2,
  //         "score_duration": 6,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S",
  //             "CC"
  //         ]
  //     },
  //     {
  //         "train_number": "11125",
  //         "train_name": "InterCity Express",
  //         "run_days": [
  //             "Mon",
  //             "Wed",
  //             "Thu",
  //             "Sun"
  //         ],
  //         "train_src": "RTM",
  //         "train_dstn": "GWL",
  //         "from_std": "19:50",
  //         "from_sta": "19:25",
  //         "local_train_from_sta": 1165,
  //         "to_sta": "20:28",
  //         "to_std": "20:30",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:38",
  //         "special_train": false,
  //         "train_type": "INT",
  //         "score": 21,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 2,
  //         "score_duration": 6,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A",
  //             "1A"
  //         ]
  //     },
  //     {
  //         "train_number": "19305",
  //         "train_name": "Dr Ambedkar Nagar - Kamakhya Express",
  //         "run_days": [
  //             "Thu"
  //         ],
  //         "train_src": "DADN",
  //         "train_dstn": "KYQ",
  //         "from_std": "13:45",
  //         "from_sta": "13:35",
  //         "local_train_from_sta": 815,
  //         "to_sta": "14:26",
  //         "to_std": "14:28",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 38,
  //         "duration": "0:41",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 21,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 2,
  //         "score_duration": 6,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3E",
  //             "3A",
  //             "2A"
  //         ]
  //     },
  //     {
  //         "train_number": "19343",
  //         "train_name": "Penchvalley Express",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "SEY",
  //         "from_std": "13:05",
  //         "from_sta": "13:05",
  //         "local_train_from_sta": 785,
  //         "to_sta": "13:58",
  //         "to_std": "14:00",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 0,
  //         "distance": 39,
  //         "duration": "0:53",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 19,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 4,
  //         "score_duration": 4,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A"
  //         ]
  //     },
  //     {
  //         "train_number": "09507",
  //         "train_name": "INDORE - UJJAIN Special",
  //         "run_days": [
  //             "Sun",
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "UJN",
  //         "from_std": "18:00",
  //         "from_sta": "18:00",
  //         "local_train_from_sta": 1080,
  //         "to_sta": "18:55",
  //         "to_std": "18:57",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 3,
  //         "distance": 38.8,
  //         "duration": "0:55",
  //         "special_valid_to": "2099-04-02",
  //         "special_train": true,
  //         "train_type": "MEX",
  //         "score": 19,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 4,
  //         "score_duration": 4,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "2S"
  //         ]
  //     },
  //     {
  //         "train_number": "59307",
  //         "train_name": "INDORE - Jaipur Link Express (via Ajmer)",
  //         "run_days": [
  //             "Mon",
  //             "Tue",
  //             "Wed",
  //             "Thu",
  //             "Fri",
  //             "Sat",
  //             "Sun"
  //         ],
  //         "train_src": "INDB",
  //         "train_dstn": "JP",
  //         "from_std": "18:00",
  //         "from_sta": "18:00",
  //         "local_train_from_sta": 1080,
  //         "to_sta": "19:06",
  //         "to_std": "19:08",
  //         "from_day": 0,
  //         "to_day": 0,
  //         "d_day": 0,
  //         "from": "INDB",
  //         "to": "DWX",
  //         "from_station_name": "INDORE JN BG",
  //         "to_station_name": "DEWAS",
  //         "halt_stn": 3,
  //         "distance": 38.8,
  //         "duration": "1:6",
  //         "special_train": false,
  //         "train_type": "MEX",
  //         "score": 19,
  //         "score_train_type": 5,
  //         "score_booking_requency": 0,
  //         "frequency_perc": 0,
  //         "from_distance_text": "",
  //         "to_distance_text": "",
  //         "has_pantry": false,
  //         "is_monsoon_timing_applicable": false,
  //         "duration_rating": 5,
  //         "score_duration": 4,
  //         "score_std": 10,
  //         "score_user_preferred": 0,
  //         "train_date": "17-04-2025",
  //         "class_type": [
  //             "SL",
  //             "3A"
  //         ]
  //     }
  // ]
    
    const handleSourceInputChange = (e) => {
      setSource(e.target.value);
      const value = e.target.value;
      setSource(value);
  
      if (value.length === 0) {
        setSourceSuggestions([]);
        return;
      }
  

      const matches = data
        .filter((station) =>
          station.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 6); 
  
      setSourceSuggestions(matches.map((station) => `${station.name}-${station.code}`));
    };


    const handleDestinationInputChange = (e) => {   
      setDestination(e.target.value);
      const value = e.target.value;
      setDestination(value);
      if (value.length === 0) {
        setDestinationSuggestions([]);
        return;
      }
      const matches = data
        .filter((station) =>
          station.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 5);
      setDestinationSuggestions(matches.map((station) => `${station.name}-${station.code}`));
    };
   
  const  handleDestinationSuggestionClick = (station) => {
    // console.log('hello world');
    setDestination(station);
    setDestinationSuggestions([]);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);


    // 🚨 Replace this with your API call or logic
    console.log("Searching trains from", source, "to", destination, "on", date);
    const src = source.split("-")[1];
    const dest = destination.split("-")[1];
    const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
      params: {
        fromStationCode: src,
        toStationCode: dest,
        dateOfJourney: date
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      if(response.data.message==="Success" &&response.data.data.length===0)
      {
        setInvalidIp(true);
       
      }
        // return response.data;
        setSdata(response.data.data);
    } catch (error) {
      setError(true)
      console.error(error);
    }
    finally{
      setLoading(false);
      setIsSubmitted(true)
    } 
  };

  return (
    <div className="min-h-screen min-w-10/12 flex flex-col items-center justify-center bg-transparent px-4">
    { !sdata && <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Search Trains
        </h2>

        {/* <div>
          <label className="block text-gray-700 font-medium mb-1">From Station</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g. Delhi"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div> */}
        <StationInput
          label="From Station"
          stationCode={source}
          handleInputChange={handleSourceInputChange}
          handleSuggestionClick={handleSourceSuggestionClick}
          suggestions={sourceSuggestions}
          placeholder="e.g. Delhi"

          />

        {/* <div>
          <label className="block text-gray-700 font-medium mb-1">To Station</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Mumbai"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div> */}
       <StationInput
        label="To Station"
        stationCode={destination}
       handleInputChange={handleDestinationInputChange}
       handleSuggestionClick={handleDestinationSuggestionClick}
        suggestions={destinationSuggestions}
        placeholder="e.g. Mumbai"
        />
        <div>
          <label className="block text-gray-700 font-medium mb-1">Journey Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Search Trains
        </button>

      </form>

        }
{loading && <Loading/>}

{/* invalid input */}
{invalidIp ? <ErrorMessage type="invalidInput"/>:
      // rate limit error
      error ? <ErrorMessage type="rateLimit"/> : 
      // some other error
      !error  && !sdata && isSubmitted   ? <ErrorMessage type="default"/> : 
      // successful response
      sdata &&   <TrainSearchResults trains={sdata}/>}
       
    </div>
  );
}
