import { useState } from "react";
import { data } from "../Data/StationName&Code";
import StationInput from "./StationInput";
import TrainsFromStation from "../ResultsComponents/TrainsFromStation";
import axios from "axios";
export default function TrainFromStations() {
  const [stationCode, setStationCode] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tdata, setTData] = useState(null);
// const tdata={
//   "originating": [
//       {
//           "trainNo": "01265",
//           "trainName": "MML ABKP SPL",
//           "arrivalTime": "Source",
//           "departureTime": "13:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01447",
//           "trainName": "JBP HWH SPL",
//           "arrivalTime": "Source",
//           "departureTime": "23:40",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "01466",
//           "trainName": "JBP SOMNATH SPL",
//           "arrivalTime": "Source",
//           "departureTime": "12:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02062",
//           "trainName": "JANSHATABDI SPL",
//           "arrivalTime": "Source",
//           "departureTime": "5:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02127",
//           "trainName": "JBP NZM SPL",
//           "arrivalTime": "Source",
//           "departureTime": "19:30",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02140",
//           "trainName": "JBP YPR SPL",
//           "arrivalTime": "Source",
//           "departureTime": "6:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "02160",
//           "trainName": "JBP NGP SF SPL",
//           "arrivalTime": "Source",
//           "departureTime": "21:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02174",
//           "trainName": "JBP NZM SF SPL",
//           "arrivalTime": "Source",
//           "departureTime": "17:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02191",
//           "trainName": "HW FESTIVAL SPL",
//           "arrivalTime": "Source",
//           "departureTime": "18:55",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02195",
//           "trainName": "JBP NZM SPECIAL",
//           "arrivalTime": "Source",
//           "departureTime": "18:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02281",
//           "trainName": "JBP AII SPECIAL",
//           "arrivalTime": "Source",
//           "departureTime": "21:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02289",
//           "trainName": "JBP REWA SPL",
//           "arrivalTime": "Source",
//           "departureTime": "17:05",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02292",
//           "trainName": "JBP INDB EXP",
//           "arrivalTime": "Source",
//           "departureTime": "23:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05206",
//           "trainName": "JBP LJN SPL",
//           "arrivalTime": "Source",
//           "departureTime": "20:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01705",
//           "trainName": "JBP REWA SPL",
//           "arrivalTime": "Source",
//           "departureTime": "19:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "02132",
//           "trainName": "JBP PUNE SPECIAL",
//           "arrivalTime": "Source",
//           "departureTime": "13:50",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02134",
//           "trainName": "BDTS FESTIVL SPL",
//           "arrivalTime": "Source",
//           "departureTime": "17:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "02198",
//           "trainName": "JBP CBE SPECIAL",
//           "arrivalTime": "Source",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "11265",
//           "trainName": "MML ABKP EXPRESS",
//           "arrivalTime": "Source",
//           "departureTime": "13:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "11447",
//           "trainName": "SHAKTIPUNJ EXP",
//           "arrivalTime": "Source",
//           "departureTime": "22:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11449",
//           "trainName": "JBP SVDK EXP",
//           "arrivalTime": "Source",
//           "departureTime": "06:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11464",
//           "trainName": "JBP SOMNATH EXP",
//           "arrivalTime": "Source",
//           "departureTime": "14:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11466",
//           "trainName": "JBP SOMNATH EXP",
//           "arrivalTime": "Source",
//           "departureTime": "12:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11651",
//           "trainName": "INTERCITY EXP",
//           "arrivalTime": "Source",
//           "departureTime": "16:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "11705",
//           "trainName": "JBP REWA EXP",
//           "arrivalTime": "Source",
//           "departureTime": "07:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "CC",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12062",
//           "trainName": "RKMP JANSHTBDI",
//           "arrivalTime": "Source",
//           "departureTime": "05:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC",
//               "EV"
//           ]
//       },
//       {
//           "trainNo": "12121",
//           "trainName": "MP SAMPRK KRNTI",
//           "arrivalTime": "Source",
//           "departureTime": "19:30",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "1A",
//               "2A",
//               "3A",
//               "SL",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12160",
//           "trainName": "JBP AMI SF EXP",
//           "arrivalTime": "Source",
//           "departureTime": "21:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12181",
//           "trainName": "DAYODAI EXP",
//           "arrivalTime": "Source",
//           "departureTime": "20:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12187",
//           "trainName": "GARIBRATH EXP",
//           "arrivalTime": "Source",
//           "departureTime": "19:50",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "12189",
//           "trainName": "MAHAKAUSHAL EXP",
//           "arrivalTime": "Source",
//           "departureTime": "18:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12192",
//           "trainName": "JBP NZM SF EXP",
//           "arrivalTime": "Source",
//           "departureTime": "17:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12194",
//           "trainName": "JBP YPR EXP",
//           "arrivalTime": "Source",
//           "departureTime": "06:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "15206",
//           "trainName": "CHITRAKOOT EXP",
//           "arrivalTime": "Source",
//           "departureTime": "21:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "1A",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "20174",
//           "trainName": "VANDE BHARAT EXP",
//           "arrivalTime": "Source",
//           "departureTime": "06:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "CC",
//               "EC"
//           ]
//       },
//       {
//           "trainNo": "20827",
//           "trainName": "JBP SRC HUMSAFAR",
//           "arrivalTime": "Source",
//           "departureTime": "20:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "22174",
//           "trainName": "JBP CAF SUF EXP",
//           "arrivalTime": "Source",
//           "departureTime": "05:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "CC",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22181",
//           "trainName": "JBP NZM SF EXP",
//           "arrivalTime": "Source",
//           "departureTime": "15:15",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22189",
//           "trainName": "INTERCITY EXP",
//           "arrivalTime": "Source",
//           "departureTime": "17:05",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "CC",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22192",
//           "trainName": "JBP INDB EXP",
//           "arrivalTime": "Source",
//           "departureTime": "23:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A",
//               "2S",
//               "3E"
//           ]
//       }
//   ],
//   "passing": [
//       {
//           "trainNo": "01033",
//           "trainName": "DBG FESTIVAL SPL",
//           "arrivalTime": "8:50",
//           "departureTime": "9:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "01034",
//           "trainName": "DBG PUNE SPL",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "01045",
//           "trainName": "KOP DHN SPECIAL",
//           "arrivalTime": "15:30",
//           "departureTime": "15:40",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01046",
//           "trainName": "DHN KOP SPL",
//           "arrivalTime": "0:40",
//           "departureTime": "0:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01055",
//           "trainName": "LTT GKP SPECIAL",
//           "arrivalTime": "1:00",
//           "departureTime": "1:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "01056",
//           "trainName": "GODAN EXP SPL",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01059",
//           "trainName": "LTT CPR SPECIAL",
//           "arrivalTime": "1:00",
//           "departureTime": "1:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01060",
//           "trainName": "CPR LTT SPL",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01061",
//           "trainName": "LTT JYG SPL",
//           "arrivalTime": "2:40",
//           "departureTime": "2:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01062",
//           "trainName": "JYG LTT SPL",
//           "arrivalTime": "9:00",
//           "departureTime": "9:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01067",
//           "trainName": "LTT FAIZABAD SPL",
//           "arrivalTime": "21:40",
//           "departureTime": "21:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01068",
//           "trainName": "FD LTT SUP SPL",
//           "arrivalTime": "0:25",
//           "departureTime": "0:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01081",
//           "trainName": "LTT GKP SPECIAL",
//           "arrivalTime": "8:25",
//           "departureTime": "8:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01082",
//           "trainName": "GKP LTT EXP SPL",
//           "arrivalTime": "6:20",
//           "departureTime": "6:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01115",
//           "trainName": "GKP FESTIVAL SPL",
//           "arrivalTime": "8:50",
//           "departureTime": "9:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01116",
//           "trainName": "PUNE FESTVL SPL",
//           "arrivalTime": "6:55",
//           "departureTime": "7:05",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01117",
//           "trainName": "ET PCOI SPL",
//           "arrivalTime": "23:10",
//           "departureTime": "23:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01118",
//           "trainName": "PCOI ET EXP SPL",
//           "arrivalTime": "5:35",
//           "departureTime": "5:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01245",
//           "trainName": " CSMT",
//           "arrivalTime": "1:50",
//           "departureTime": "2:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01246",
//           "trainName": "BGP CSMT SPL",
//           "arrivalTime": "6:05",
//           "departureTime": "6:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01255",
//           "trainName": "CSMT GHY SPL",
//           "arrivalTime": "16:35",
//           "departureTime": "16:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01257",
//           "trainName": "DR PCOI SF SPL",
//           "arrivalTime": "5:50",
//           "departureTime": "6:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01258",
//           "trainName": "PCOI DR SUP SPL",
//           "arrivalTime": "19:20",
//           "departureTime": "19:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01271",
//           "trainName": "ET BPL SPECIAL",
//           "arrivalTime": "21:00",
//           "departureTime": "21:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01272",
//           "trainName": "BPL ET SPECIAL",
//           "arrivalTime": "6:40",
//           "departureTime": "6:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01753",
//           "trainName": "ITR REWA SPL",
//           "arrivalTime": "4:00",
//           "departureTime": "4:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01754",
//           "trainName": "REWA ITR SPL",
//           "arrivalTime": "21:30",
//           "departureTime": "21:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02049",
//           "trainName": "LTT FAIZABAD SPL",
//           "arrivalTime": "5:00",
//           "departureTime": "5:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02050",
//           "trainName": "FD LTT SF SPL",
//           "arrivalTime": "11:00",
//           "departureTime": "11:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02051",
//           "trainName": "INTERCITY SF SPL",
//           "arrivalTime": "10:20",
//           "departureTime": "10:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02052",
//           "trainName": "INTERCITY SF SPL",
//           "arrivalTime": "15:42",
//           "departureTime": "15:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02135",
//           "trainName": "BANARAS FES SPL",
//           "arrivalTime": "8:50",
//           "departureTime": "9:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02136",
//           "trainName": "PUNE FESTIVAL SP",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02141",
//           "trainName": "LTT PPTA SPL",
//           "arrivalTime": "14:30",
//           "departureTime": "14:40",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02142",
//           "trainName": "PPTA LTT SPL",
//           "arrivalTime": "22:30",
//           "departureTime": "22:40",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02149",
//           "trainName": "PUNE DNR SPL",
//           "arrivalTime": "13:50",
//           "departureTime": "14:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02150",
//           "trainName": "DNR PUNE SPECIAL",
//           "arrivalTime": "10:20",
//           "departureTime": "10:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02165",
//           "trainName": "LTT GKP FEST SPL",
//           "arrivalTime": "21:40",
//           "departureTime": "21:50",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02166",
//           "trainName": "LTT FESTIVAL SPL",
//           "arrivalTime": "4:50",
//           "departureTime": "5:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02167",
//           "trainName": "BANARAS FES SPL",
//           "arrivalTime": "14:15",
//           "departureTime": "14:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02168",
//           "trainName": "LTT FESTIVL SPL",
//           "arrivalTime": "19:55",
//           "departureTime": "20:05",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02193",
//           "trainName": "CSMT BSB SUP SPL",
//           "arrivalTime": "15:50",
//           "departureTime": "16:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02194",
//           "trainName": "MAHANAGARI SPL",
//           "arrivalTime": "19:00",
//           "departureTime": "19:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02293",
//           "trainName": "PRYJ DURONTO SP",
//           "arrivalTime": "6:00",
//           "departureTime": "6:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02294",
//           "trainName": "LTT DURONTO SPL",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02295",
//           "trainName": "SANGHAMITRA EXP",
//           "arrivalTime": "17:10",
//           "departureTime": "17:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02296",
//           "trainName": "DNR SBC SPL",
//           "arrivalTime": "7:25",
//           "departureTime": "7:35",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02321",
//           "trainName": "HWH CSMT SPL",
//           "arrivalTime": "19:20",
//           "departureTime": "19:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02322",
//           "trainName": "CSMT HWH SPL",
//           "arrivalTime": "13:40",
//           "departureTime": "13:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02335",
//           "trainName": "BGP LTT SPL",
//           "arrivalTime": "1:45",
//           "departureTime": "1:55",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02336",
//           "trainName": "LTT BGP SF SPL",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02361",
//           "trainName": "ASN CSMT SPL",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02362",
//           "trainName": "CSMT ASANSOL SPL",
//           "arrivalTime": "1:40",
//           "departureTime": "1:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02389",
//           "trainName": "GAYA MAS SPL",
//           "arrivalTime": "16:00",
//           "departureTime": "16:05",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02390",
//           "trainName": "MAS GAYA SPL",
//           "arrivalTime": "8:20",
//           "departureTime": "8:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02519",
//           "trainName": "LTT KYQ AC EXP",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02520",
//           "trainName": "KYQ LTT AC SPL",
//           "arrivalTime": "0:40",
//           "departureTime": "0:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02539",
//           "trainName": "YPR LKO FEST SPL",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02545",
//           "trainName": "RXL LTT SPL",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02546",
//           "trainName": "FESTIVAL SF SPL",
//           "arrivalTime": "8:20",
//           "departureTime": "8:30",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02577",
//           "trainName": "DBG MYS SPL",
//           "arrivalTime": "8:05",
//           "departureTime": "8:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02578",
//           "trainName": "MYS DBG FEST SPL",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02669",
//           "trainName": "MAS CPR EXP",
//           "arrivalTime": "19:00",
//           "departureTime": "19:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02670",
//           "trainName": "GANGAKAVERI SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02683",
//           "trainName": "YPR LKO FEST SPL",
//           "arrivalTime": "5:40",
//           "departureTime": "5:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02684",
//           "trainName": "YPR FESTIVL SPL",
//           "arrivalTime": "6:20",
//           "departureTime": "6:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02741",
//           "trainName": "VSGPNBE FEST SPL",
//           "arrivalTime": "22:10",
//           "departureTime": "22:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02742",
//           "trainName": "PNBEVSG FESTSPL",
//           "arrivalTime": "1:45",
//           "departureTime": "1:55",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02788",
//           "trainName": "SC FESTVL SPL",
//           "arrivalTime": "0:15",
//           "departureTime": "0:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02791",
//           "trainName": "SC DNR SPL",
//           "arrivalTime": "2:55",
//           "departureTime": "3:05",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02792",
//           "trainName": "DNR SC SPL",
//           "arrivalTime": "2:05",
//           "departureTime": "2:15",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02853",
//           "trainName": "DURG BPL SPECIAL",
//           "arrivalTime": "4:15",
//           "departureTime": "4:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02854",
//           "trainName": "BPL DURG SPL",
//           "arrivalTime": "21:20",
//           "departureTime": "21:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02913",
//           "trainName": "FESTIVAL SPL",
//           "arrivalTime": "9:25",
//           "departureTime": "9:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02914",
//           "trainName": "BDTS FESTVL SPL",
//           "arrivalTime": "10:40",
//           "departureTime": "10:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "03201",
//           "trainName": "PNBE LTT SPL",
//           "arrivalTime": "14:55",
//           "departureTime": "15:05",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "03202",
//           "trainName": "LTT PATNA SPL",
//           "arrivalTime": "7:35",
//           "departureTime": "7:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05017",
//           "trainName": "GKP FESTIVAL SPL",
//           "arrivalTime": "0:35",
//           "departureTime": "0:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05018",
//           "trainName": "LTT FESTIVAL SPL",
//           "arrivalTime": "22:10",
//           "departureTime": "22:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05267",
//           "trainName": "RXL LTT SPL",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05268",
//           "trainName": "LTT RXL SPECIAL",
//           "arrivalTime": "8:20",
//           "departureTime": "8:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05402",
//           "trainName": "LTT GKP SPECIAL",
//           "arrivalTime": "5:50",
//           "departureTime": "6:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05547",
//           "trainName": "RXL LTT SPL",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "05548",
//           "trainName": "LTT RXL SPECIAL",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "05563",
//           "trainName": "JYG UDN SPL",
//           "arrivalTime": "19:40",
//           "departureTime": "19:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05564",
//           "trainName": "JYG FESTIVAL SPL",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05645",
//           "trainName": "LTT GHY SPL",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05646",
//           "trainName": "GHY LTT SPECIAL",
//           "arrivalTime": "1:45",
//           "departureTime": "1:55",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05647",
//           "trainName": "LTT GHY SPECIAL",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05648",
//           "trainName": "GHY LTT SPECIAL",
//           "arrivalTime": "1:45",
//           "departureTime": "1:55",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "06229",
//           "trainName": "MYS BSB FEST SPL",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "06230",
//           "trainName": "MYS FESTIVAL SPL",
//           "arrivalTime": "6:00",
//           "departureTime": "6:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "06359",
//           "trainName": "ERS PNBE SPL",
//           "arrivalTime": "15:30",
//           "departureTime": "15:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "06360",
//           "trainName": "PNBE ERS SF SPL",
//           "arrivalTime": "6:20",
//           "departureTime": "6:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "07323",
//           "trainName": "UBL BSB FEST SPL",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "07324",
//           "trainName": "UBL FETSIVAL SPL",
//           "arrivalTime": "6:00",
//           "departureTime": "6:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "08233",
//           "trainName": "INDB BSP SP",
//           "arrivalTime": "4:10",
//           "departureTime": "4:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "08234",
//           "trainName": "BSP INDB SPL",
//           "arrivalTime": "20:40",
//           "departureTime": "20:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "08609",
//           "trainName": "RNC LTT SPL",
//           "arrivalTime": "15:55",
//           "departureTime": "16:05",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "08610",
//           "trainName": "LTT RNC SPL",
//           "arrivalTime": "8:20",
//           "departureTime": "8:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09063",
//           "trainName": "UDN DANAPUR SPL",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09064",
//           "trainName": "DNR UDHNA SPL",
//           "arrivalTime": "6:55",
//           "departureTime": "7:05",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09103",
//           "trainName": "BSB MAHAMANA SPL",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09104",
//           "trainName": "MAHAMANA SF SPL",
//           "arrivalTime": "14:30",
//           "departureTime": "14:40",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09105",
//           "trainName": "KDCY REWA SPL",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09106",
//           "trainName": "REWA KDCY SF SPL",
//           "arrivalTime": "0:25",
//           "departureTime": "0:35",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09147",
//           "trainName": "ST BGP SF SPL",
//           "arrivalTime": "0:10",
//           "departureTime": "0:20",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09148",
//           "trainName": "BGP SURAT SF SPL",
//           "arrivalTime": "1:05",
//           "departureTime": "1:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09209",
//           "trainName": "BL PURI S F SPL",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09210",
//           "trainName": "PURI VALSAD SPL",
//           "arrivalTime": "18:25",
//           "departureTime": "18:35",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09237",
//           "trainName": "RAJKOT REWA SPL",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09238",
//           "trainName": "REWA RJT SPECIAL",
//           "arrivalTime": "0:25",
//           "departureTime": "0:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09267",
//           "trainName": "ADI PRYJ SF SPL",
//           "arrivalTime": "9:30",
//           "departureTime": "9:40",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09268",
//           "trainName": "PRYJ ADI SF SPL",
//           "arrivalTime": "0:25",
//           "departureTime": "0:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09271",
//           "trainName": "FESTIVAL SPL",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09272",
//           "trainName": "PNBE BDTS SF SPL",
//           "arrivalTime": "10:40",
//           "departureTime": "10:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05119",
//           "trainName": "BSBS FEST SPL",
//           "arrivalTime": "11:15",
//           "departureTime": "11:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "12545",
//           "trainName": "KARMBHOOMI EXP",
//           "arrivalTime": "14:00",
//           "departureTime": "14:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "15268",
//           "trainName": "LTT RXL EXPRESS",
//           "arrivalTime": "08:20",
//           "departureTime": "08:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "15548",
//           "trainName": "LTT RXL EXPRESS",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22564",
//           "trainName": "ANTYODAYA EXP",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "EC",
//               "EA",
//               "2A",
//               "3A",
//               "3E",
//               "CC",
//               "FC",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11117",
//           "trainName": "ET PCOI EXP",
//           "arrivalTime": "23:10",
//           "departureTime": "23:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               null,
//               null
//           ]
//       },
//       {
//           "trainNo": "11118",
//           "trainName": "PCOI ET EXPRESS",
//           "arrivalTime": "05:35",
//           "departureTime": "05:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               null,
//               null
//           ]
//       },
//       {
//           "trainNo": "11127",
//           "trainName": "BSL KTE EXP",
//           "arrivalTime": "02:00",
//           "departureTime": "02:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "11128",
//           "trainName": "KTE BSL EXP",
//           "arrivalTime": "02:25",
//           "departureTime": "02:35",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "15645",
//           "trainName": "LTT DBRG EXP",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               null,
//               null,
//               null,
//               null
//           ]
//       },
//       {
//           "trainNo": "15646",
//           "trainName": "DBRG LTT EXP",
//           "arrivalTime": "01:35",
//           "departureTime": "01:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               null,
//               null,
//               null,
//               null
//           ]
//       },
//       {
//           "trainNo": "16229",
//           "trainName": "MYS BSB EXP",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               null,
//               null,
//               null,
//               null,
//               null
//           ]
//       },
//       {
//           "trainNo": "16230",
//           "trainName": "BSB MYS EXPRESS",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               null,
//               null,
//               null,
//               null
//           ]
//       },
//       {
//           "trainNo": "03254",
//           "trainName": "SMVB DNR SPL",
//           "arrivalTime": "16:40",
//           "departureTime": "16:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "09045",
//           "trainName": "UDN REWA SF SPL",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "09046",
//           "trainName": "REWA UDN SF SPL",
//           "arrivalTime": "10:40",
//           "departureTime": "10:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "01449",
//           "trainName": "JBP SVDK SPECIAL",
//           "arrivalTime": "16:45",
//           "departureTime": "Source",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "01450",
//           "trainName": "SVDK JBP SPL",
//           "arrivalTime": "Destination",
//           "departureTime": "04:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "05705",
//           "trainName": "JBP-NIR PASSENGER",
//           "arrivalTime": "10:35",
//           "departureTime": "Source",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "SL",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "07652",
//           "trainName": "CPR J FEST SPL",
//           "arrivalTime": "11:10",
//           "departureTime": "11:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09025",
//           "trainName": "BDTS ASR SF SPL",
//           "arrivalTime": "23:50",
//           "departureTime": "23:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09026",
//           "trainName": "ASR BDTS SPL",
//           "arrivalTime": "06:10",
//           "departureTime": "06:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09413",
//           "trainName": "ADI KOLKATA SPL",
//           "arrivalTime": "09:40",
//           "departureTime": "09:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "09414",
//           "trainName": "KOAA ADI SPECIAL",
//           "arrivalTime": "01:10",
//           "departureTime": "01:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "SL",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "01665",
//           "trainName": "AGTL FESTIVL SPL",
//           "arrivalTime": "21:15",
//           "departureTime": "21:25",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "01666",
//           "trainName": "AGTL RKMP SPL",
//           "arrivalTime": "10:40",
//           "departureTime": "10:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02187",
//           "trainName": "REWA CSMT SPL",
//           "arrivalTime": "19:40",
//           "departureTime": "19:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "SL",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "02188",
//           "trainName": "CSMT REWA SF SPL",
//           "arrivalTime": "05:00",
//           "departureTime": "05:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "SL",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "03225",
//           "trainName": "JYG RJPB SPL",
//           "arrivalTime": "10:00",
//           "departureTime": "10:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03226",
//           "trainName": "RJPB JYG SPL",
//           "arrivalTime": "04:30",
//           "departureTime": "04:40",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03241",
//           "trainName": "BANKA RJPB SPL",
//           "arrivalTime": "03:05",
//           "departureTime": "03:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "1A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "03242",
//           "trainName": "RJPB BANKA SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "1A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "03245",
//           "trainName": "NJP RJPB SPECIAL",
//           "arrivalTime": "03:05",
//           "departureTime": "03:15",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03246",
//           "trainName": "RJPB NJP SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "03247",
//           "trainName": "KYQ RJPB SPECIAL",
//           "arrivalTime": "03:05",
//           "departureTime": "03:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "03248",
//           "trainName": "RJPB KYQ SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03251",
//           "trainName": "PPTA YPR SPL",
//           "arrivalTime": "03:05",
//           "departureTime": "03:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03252",
//           "trainName": "YPRPPTA FEST SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03259",
//           "trainName": "PNBE CSMT SPL",
//           "arrivalTime": "03:05",
//           "departureTime": "03:15",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "03260",
//           "trainName": "FESTIVAL SF SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "04151",
//           "trainName": "CNB LTT SF HSPL",
//           "arrivalTime": "23:30",
//           "departureTime": "23:40",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "04152",
//           "trainName": "LTT CNB SF SPL",
//           "arrivalTime": "06:15",
//           "departureTime": "06:25",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "05215",
//           "trainName": "MFP NKE SPL",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "05216",
//           "trainName": "NKE MFP SPL",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "05271",
//           "trainName": "HWH MFP SPL",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "05272",
//           "trainName": "MFP HWH SPL",
//           "arrivalTime": "21:40",
//           "departureTime": "21:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "06509",
//           "trainName": "SBCDNR HUMSAFAR",
//           "arrivalTime": "16:40",
//           "departureTime": "16:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "06510",
//           "trainName": "DNR SBC SPL",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "07007",
//           "trainName": "SC DBG SPL",
//           "arrivalTime": "10:10",
//           "departureTime": "10:20",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "07008",
//           "trainName": "DBG SC SPL",
//           "arrivalTime": "14:25",
//           "departureTime": "14:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "07419",
//           "trainName": "TPTY VSG SPL",
//           "arrivalTime": "09:00",
//           "departureTime": "09:05",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "07420",
//           "trainName": "TPTY FEST SPL",
//           "arrivalTime": "04:00",
//           "departureTime": "04:05",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "07651",
//           "trainName": "J CPR SPL",
//           "arrivalTime": "15:30",
//           "departureTime": "15:40",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09011",
//           "trainName": "BDTS SWV AC SPL",
//           "arrivalTime": "12:55",
//           "departureTime": "13:00",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "09012",
//           "trainName": "UDN FESTVL SPL",
//           "arrivalTime": "08:10",
//           "departureTime": "08:20",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "09033",
//           "trainName": "BDTS GKP SPL",
//           "arrivalTime": "09:30",
//           "departureTime": "09:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09034",
//           "trainName": "GKP BDTS SF SPL",
//           "arrivalTime": "04:00",
//           "departureTime": "04:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "09065",
//           "trainName": "ST CPR SPL",
//           "arrivalTime": "21:28",
//           "departureTime": "21:38",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "09066",
//           "trainName": "CPR ST SPECIAL",
//           "arrivalTime": "00:05",
//           "departureTime": "00:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11033",
//           "trainName": "DARBHANGA EXP",
//           "arrivalTime": "08:50",
//           "departureTime": "09:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11034",
//           "trainName": "DBG PUNE EXP",
//           "arrivalTime": "14:05",
//           "departureTime": "14:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11037",
//           "trainName": "PUNE GKP EXPRESS",
//           "arrivalTime": "08:50",
//           "departureTime": "09:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11038",
//           "trainName": "GKP PUNE EXP",
//           "arrivalTime": "07:00",
//           "departureTime": "07:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "11045",
//           "trainName": "KOP DHN EXP",
//           "arrivalTime": "15:20",
//           "departureTime": "15:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11046",
//           "trainName": "DIKSHABHUMI EXP",
//           "arrivalTime": "00:40",
//           "departureTime": "00:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11055",
//           "trainName": "GODAN EXPRESS",
//           "arrivalTime": "01:00",
//           "departureTime": "01:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11056",
//           "trainName": "GODAN EXPRESS",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11059",
//           "trainName": "CHHAPRA EXPRESS",
//           "arrivalTime": "01:00",
//           "departureTime": "01:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11060",
//           "trainName": "CPR LTT EXPRESS",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11061",
//           "trainName": "LTT JAYNAGAR EX",
//           "arrivalTime": "02:40",
//           "departureTime": "02:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11062",
//           "trainName": "JYG LTT EXP",
//           "arrivalTime": "09:00",
//           "departureTime": "09:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11081",
//           "trainName": "LTT GKP EXPRESS",
//           "arrivalTime": "08:25",
//           "departureTime": "08:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11082",
//           "trainName": "GKP LTT EXPRESS",
//           "arrivalTime": "06:15",
//           "departureTime": "06:25",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11271",
//           "trainName": "VINDHYACHAL EXP",
//           "arrivalTime": "21:00",
//           "departureTime": "21:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11272",
//           "trainName": "VINDHYACHAL EXP",
//           "arrivalTime": "06:40",
//           "departureTime": "06:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11273",
//           "trainName": "ET PCOI EXP",
//           "arrivalTime": "23:10",
//           "departureTime": "23:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "11274",
//           "trainName": "PCOI ET EXPRESS",
//           "arrivalTime": "05:25",
//           "departureTime": "05:35",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "GN",
//               "TQ",
//               "PT",
//               "LD",
//               "DF",
//               "FT",
//               "DP",
//               "HP",
//               "PH",
//               "SS",
//               "YU"
//           ]
//       },
//       {
//           "trainNo": "11427",
//           "trainName": "PUNE JASIDIH EXP",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11428",
//           "trainName": "JSME PUNE EXP",
//           "arrivalTime": "14:25",
//           "departureTime": "14:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "11753",
//           "trainName": "ITR REWA EXP",
//           "arrivalTime": "03:55",
//           "departureTime": "04:05",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "11754",
//           "trainName": "REWA ITR EXP",
//           "arrivalTime": "21:30",
//           "departureTime": "21:40",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "11755",
//           "trainName": "ITR REWA EXP",
//           "arrivalTime": "03:55",
//           "departureTime": "04:05",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "11756",
//           "trainName": "REWA ITR EXP",
//           "arrivalTime": "21:30",
//           "departureTime": "21:40",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "12141",
//           "trainName": "PATLIPUTRA EXP",
//           "arrivalTime": "14:30",
//           "departureTime": "14:40",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12142",
//           "trainName": "PPTA LTT EXP",
//           "arrivalTime": "22:30",
//           "departureTime": "22:40",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12149",
//           "trainName": "PUNE DNR EXPRESS",
//           "arrivalTime": "13:45",
//           "departureTime": "13:55",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12150",
//           "trainName": "DNR PUNE EXP",
//           "arrivalTime": "10:15",
//           "departureTime": "10:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12165",
//           "trainName": "LTT GKP SF EXP",
//           "arrivalTime": "21:40",
//           "departureTime": "21:50",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12166",
//           "trainName": "GKP LTT EXPRESS",
//           "arrivalTime": "04:50",
//           "departureTime": "05:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12167",
//           "trainName": "LTT BANARAS EXP",
//           "arrivalTime": "14:15",
//           "departureTime": "14:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "1A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12168",
//           "trainName": "BSBS LTT SF EXP",
//           "arrivalTime": "20:00",
//           "departureTime": "20:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "1A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12293",
//           "trainName": "PRYJ DURONTO",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12294",
//           "trainName": "LTT DURONTO",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12295",
//           "trainName": "SANGHAMITRA EXP",
//           "arrivalTime": "17:10",
//           "departureTime": "17:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12296",
//           "trainName": "SANGHA MITRA EX",
//           "arrivalTime": "07:25",
//           "departureTime": "07:35",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12321",
//           "trainName": "MUMBAI MAIL",
//           "arrivalTime": "19:20",
//           "departureTime": "19:30",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12322",
//           "trainName": "KOLKATA MAIL",
//           "arrivalTime": "13:35",
//           "departureTime": "13:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12335",
//           "trainName": "BGP LTT EXP",
//           "arrivalTime": "01:35",
//           "departureTime": "01:45",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12336",
//           "trainName": "LTT BGP EXPRESS",
//           "arrivalTime": "23:00",
//           "departureTime": "23:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12361",
//           "trainName": "ASN CSMT EXP",
//           "arrivalTime": "14:05",
//           "departureTime": "14:15",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12362",
//           "trainName": "CSMT ASANSOL EXP",
//           "arrivalTime": "01:40",
//           "departureTime": "01:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12389",
//           "trainName": "GAYA MAS EXPRES",
//           "arrivalTime": "16:00",
//           "departureTime": "16:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12390",
//           "trainName": "MAS GAYA EXP",
//           "arrivalTime": "08:20",
//           "departureTime": "08:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12519",
//           "trainName": "LTT KYQ AC EXP",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12520",
//           "trainName": "KYQ LTT AC EXP",
//           "arrivalTime": "00:40",
//           "departureTime": "00:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12539",
//           "trainName": "YPR LKO EXP",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12540",
//           "trainName": "LKO YPR EXP",
//           "arrivalTime": "07:00",
//           "departureTime": "07:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12546",
//           "trainName": "KARMABHOOMI EX",
//           "arrivalTime": "08:20",
//           "departureTime": "08:30",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12577",
//           "trainName": "BAGMATI EXP",
//           "arrivalTime": "08:05",
//           "departureTime": "08:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "1A",
//               "2A",
//               "2S",
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "12578",
//           "trainName": "BAGMATI EXP",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12669",
//           "trainName": "GANGAKAVERI EXP",
//           "arrivalTime": "18:50",
//           "departureTime": "19:00",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12670",
//           "trainName": "GANGAKAVERI EXP",
//           "arrivalTime": "09:45",
//           "departureTime": "09:55",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12741",
//           "trainName": "VSG PATNA EXP",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12742",
//           "trainName": "PNBE VSG EXP",
//           "arrivalTime": "01:35",
//           "departureTime": "01:45",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12791",
//           "trainName": "SC DNR SF EXP",
//           "arrivalTime": "02:55",
//           "departureTime": "03:05",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12792",
//           "trainName": "SECUNDERABAD EX",
//           "arrivalTime": "02:05",
//           "departureTime": "02:15",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "12853",
//           "trainName": "AMARKANTAK EXP",
//           "arrivalTime": "04:15",
//           "departureTime": "04:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12854",
//           "trainName": "AMARKANTAK EXP",
//           "arrivalTime": "21:25",
//           "departureTime": "21:35",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "13201",
//           "trainName": "PNBE LTT EXP",
//           "arrivalTime": "14:50",
//           "departureTime": "15:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "13202",
//           "trainName": "LTT PATNA EXP",
//           "arrivalTime": "07:35",
//           "departureTime": "07:45",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "15017",
//           "trainName": "LTT GKP EXPRESS",
//           "arrivalTime": "00:40",
//           "departureTime": "00:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "15018",
//           "trainName": "GKP LTT EXP",
//           "arrivalTime": "22:15",
//           "departureTime": "22:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "15267",
//           "trainName": "JANSADHARAN EXP",
//           "arrivalTime": "14:05",
//           "departureTime": "14:15",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "15547",
//           "trainName": "ANTYODYA EXP",
//           "arrivalTime": "14:05",
//           "departureTime": "14:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "15647",
//           "trainName": "LTT GUWAHATI EX",
//           "arrivalTime": "22:50",
//           "departureTime": "23:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "15648",
//           "trainName": "GHY LTT EXPRESS",
//           "arrivalTime": "01:35",
//           "departureTime": "01:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "15945",
//           "trainName": "LTT DIBRUGARH EX",
//           "arrivalTime": "23:00",
//           "departureTime": "23:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "15946",
//           "trainName": "DBRG LTT EXP",
//           "arrivalTime": "01:35",
//           "departureTime": "01:45",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "17323",
//           "trainName": "UBL BSBS EXP",
//           "arrivalTime": "23:45",
//           "departureTime": "23:55",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "17324",
//           "trainName": "BSBS UBL EXPRES",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "17609",
//           "trainName": "PNBE PAU EXP",
//           "arrivalTime": "19:40",
//           "departureTime": "19:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "2S",
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "17610",
//           "trainName": "PAU PNBE EXP",
//           "arrivalTime": "08:20",
//           "departureTime": "08:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "18233",
//           "trainName": "INDB BSP EXP",
//           "arrivalTime": "04:10",
//           "departureTime": "04:20",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "18234",
//           "trainName": "NARMADA EXPRESS",
//           "arrivalTime": "20:40",
//           "departureTime": "20:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "18609",
//           "trainName": "RNC LTT EXP",
//           "arrivalTime": "16:00",
//           "departureTime": "16:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "18610",
//           "trainName": "LTT RANCHI EXP",
//           "arrivalTime": "08:20",
//           "departureTime": "08:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "19013",
//           "trainName": "BSL KATNI EXP",
//           "arrivalTime": "02:00",
//           "departureTime": "02:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "GN",
//               "TQ",
//               "PT",
//               "LD",
//               "DF",
//               "FT",
//               "DP",
//               "HP",
//               "PH",
//               "SS",
//               "YU"
//           ]
//       },
//       {
//           "trainNo": "19014",
//           "trainName": "KTE BSL EXP",
//           "arrivalTime": "02:25",
//           "departureTime": "02:35",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "19045",
//           "trainName": "TAPTI GANGA EXP",
//           "arrivalTime": "00:10",
//           "departureTime": "00:20",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "19046",
//           "trainName": "TAPTI GANGA EXP",
//           "arrivalTime": "01:05",
//           "departureTime": "01:15",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "19051",
//           "trainName": "MFP SHRAMIK EXP",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "19052",
//           "trainName": "BL SHRAMIK EXP",
//           "arrivalTime": "14:25",
//           "departureTime": "14:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "20903",
//           "trainName": "BSB MAHAMANA",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "20904",
//           "trainName": "EKNR MAHAMANA",
//           "arrivalTime": "14:25",
//           "departureTime": "14:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "20905",
//           "trainName": "REWA MAHAMANA",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "20906",
//           "trainName": "EKNR MAHAMANA EX",
//           "arrivalTime": "00:25",
//           "departureTime": "00:35",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "20929",
//           "trainName": "UDN BANARAS EXP",
//           "arrivalTime": "09:25",
//           "departureTime": "09:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "20930",
//           "trainName": "BSBS UDHANA EXP",
//           "arrivalTime": "14:30",
//           "departureTime": "14:40",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "20933",
//           "trainName": "UDN DANAPUR EXP",
//           "arrivalTime": "22:00",
//           "departureTime": "22:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "20934",
//           "trainName": "DNR UDHNA SF EX",
//           "arrivalTime": "07:00",
//           "departureTime": "07:10",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22103",
//           "trainName": "LTT AYODHYA EXP",
//           "arrivalTime": "04:45",
//           "departureTime": "04:55",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22104",
//           "trainName": "AYC LTT EXP",
//           "arrivalTime": "11:00",
//           "departureTime": "11:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22131",
//           "trainName": "PUNE BANARAS EXP",
//           "arrivalTime": "08:50",
//           "departureTime": "09:00",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22132",
//           "trainName": "GYAN GANGA EXP",
//           "arrivalTime": "14:05",
//           "departureTime": "14:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22177",
//           "trainName": "MAHANAGARI EXP",
//           "arrivalTime": "15:50",
//           "departureTime": "16:00",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "22178",
//           "trainName": "MAHANAGARI EXP",
//           "arrivalTime": "19:00",
//           "departureTime": "19:10",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "22183",
//           "trainName": "SAKET EXPRESS",
//           "arrivalTime": "21:40",
//           "departureTime": "21:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22184",
//           "trainName": "SAKET EXPRESS",
//           "arrivalTime": "00:25",
//           "departureTime": "00:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22187",
//           "trainName": "INTERCITY EXP",
//           "arrivalTime": "10:15",
//           "departureTime": "10:25",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "22188",
//           "trainName": "INTERCITY EXP",
//           "arrivalTime": "15:42",
//           "departureTime": "15:50",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "22351",
//           "trainName": "PPTA SMVB EXP",
//           "arrivalTime": "08:00",
//           "departureTime": "08:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "2S",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22352",
//           "trainName": "PATLIPUTRA EXP",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22353",
//           "trainName": "HUMSAFAR EXP",
//           "arrivalTime": "08:00",
//           "departureTime": "08:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "22354",
//           "trainName": "HUMSAFAR EXP",
//           "arrivalTime": "22:20",
//           "departureTime": "22:30",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "22535",
//           "trainName": "RMM BSBS EXP",
//           "arrivalTime": "15:25",
//           "departureTime": "15:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22536",
//           "trainName": "BSBS RMM EXP",
//           "arrivalTime": "04:50",
//           "departureTime": "05:00",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "22563",
//           "trainName": "ANTYODYA SUP EX",
//           "arrivalTime": "19:40",
//           "departureTime": "19:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22613",
//           "trainName": "RMM AYC EXPRESS",
//           "arrivalTime": "15:20",
//           "departureTime": "15:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22614",
//           "trainName": "AYC RMM EXPRESS",
//           "arrivalTime": "11:00",
//           "departureTime": "11:10",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22669",
//           "trainName": "ERS PNBE EXP",
//           "arrivalTime": "15:20",
//           "departureTime": "15:30",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22670",
//           "trainName": "PNBE ERS EXPRES",
//           "arrivalTime": "06:20",
//           "departureTime": "06:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22683",
//           "trainName": "YPR LKO EXP",
//           "arrivalTime": "05:40",
//           "departureTime": "05:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22684",
//           "trainName": "LKO YPR SF EXP",
//           "arrivalTime": "06:20",
//           "departureTime": "06:30",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22687",
//           "trainName": "MYS BSB EXP",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "GN",
//               "TQ",
//               "PT",
//               "LD",
//               "DF",
//               "FT",
//               "DP",
//               "HP",
//               "PH",
//               "SS",
//               "YU"
//           ]
//       },
//       {
//           "trainNo": "22688",
//           "trainName": "BSB MYS EXPRESS",
//           "arrivalTime": "06:00",
//           "departureTime": "06:10",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22909",
//           "trainName": "BL PURI SF EXP",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22910",
//           "trainName": "PURI BL SF",
//           "arrivalTime": "18:25",
//           "departureTime": "18:35",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22913",
//           "trainName": "SHC HAMSAFAR EX",
//           "arrivalTime": "09:25",
//           "departureTime": "09:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "SL",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22914",
//           "trainName": "BDTS HUMSAFAR EX",
//           "arrivalTime": "10:40",
//           "departureTime": "10:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "22937",
//           "trainName": "RAJKOT REWA SF",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "22938",
//           "trainName": "REWA RJT SUP EXP",
//           "arrivalTime": "00:25",
//           "departureTime": "00:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "2S",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "22947",
//           "trainName": "ST BGP SFAST",
//           "arrivalTime": "00:10",
//           "departureTime": "00:20",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22948",
//           "trainName": "BGP SURAT EXP",
//           "arrivalTime": "01:05",
//           "departureTime": "01:15",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "22967",
//           "trainName": "ADI PRYJ SFAST",
//           "arrivalTime": "09:30",
//           "departureTime": "09:40",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "22968",
//           "trainName": "PRYJ ADI SF EXP",
//           "arrivalTime": "00:25",
//           "departureTime": "00:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL"
//           ]
//       },
//       {
//           "trainNo": "22971",
//           "trainName": "BDTS PATNA SFAST",
//           "arrivalTime": "13:25",
//           "departureTime": "13:35",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22972",
//           "trainName": "PNBE BDTS SF EX",
//           "arrivalTime": "10:40",
//           "departureTime": "10:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "82355",
//           "trainName": "CSMT SUVIDHA EXP",
//           "arrivalTime": "23:40",
//           "departureTime": "23:50",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "82356",
//           "trainName": "PNBE SUVIDHA EXP",
//           "arrivalTime": "01:40",
//           "departureTime": "01:50",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "3E"
//           ]
//       }
//   ],
//   "destination": [
//       {
//           "trainNo": "01266",
//           "trainName": "ABKP JBP SPL",
//           "arrivalTime": "14:40",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01448",
//           "trainName": "HWH JBP SPL",
//           "arrivalTime": "14:20",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A"
//           ]
//       },
//       {
//           "trainNo": "01463",
//           "trainName": "SMNH JBP SPL",
//           "arrivalTime": "13:25",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01465",
//           "trainName": "SMNH JBP SPL",
//           "arrivalTime": "16:00",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02061",
//           "trainName": "JANSHATABDI SPL",
//           "arrivalTime": "22:55",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02128",
//           "trainName": "NZM JBP SPL",
//           "arrivalTime": "7:45",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02139",
//           "trainName": "YPR JBP EXP",
//           "arrivalTime": "23:15",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "02159",
//           "trainName": "NGP JBP SF SPL",
//           "arrivalTime": "6:55",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02173",
//           "trainName": "NZM JBP SF SPL",
//           "arrivalTime": "8:20",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02192",
//           "trainName": "JBP FESTIVL SPL",
//           "arrivalTime": "11:45",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02196",
//           "trainName": "MAHAKOSHAL SPL",
//           "arrivalTime": "7:55",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02282",
//           "trainName": "AII JBP SPL",
//           "arrivalTime": "8:45",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02290",
//           "trainName": "REWA JBP SPL",
//           "arrivalTime": "9:50",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "02291",
//           "trainName": "INDB JBP SPL",
//           "arrivalTime": "5:40",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "05205",
//           "trainName": "LJN JBP SPL",
//           "arrivalTime": "5:30",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": []
//       },
//       {
//           "trainNo": "01706",
//           "trainName": "REWA JBP SPL",
//           "arrivalTime": "04:15",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "02131",
//           "trainName": "PUNE JBP SF SPL",
//           "arrivalTime": "06:00",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "02133",
//           "trainName": "FESTIVAL SPL",
//           "arrivalTime": "15:10",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "2S",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "02197",
//           "trainName": "CBE JBP FESTSPL",
//           "arrivalTime": "08:45",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "2A",
//               "3A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "11266",
//           "trainName": "ABKP MML EXP",
//           "arrivalTime": "15:05",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "11448",
//           "trainName": "SHAKTIPUNJ EXP",
//           "arrivalTime": "14:05",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "11450",
//           "trainName": "SVDK JBP EXP",
//           "arrivalTime": "04:45",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11463",
//           "trainName": "SMNH JBP EXP",
//           "arrivalTime": "13:20",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11465",
//           "trainName": "SMNH JBP EXP",
//           "arrivalTime": "16:15",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "11652",
//           "trainName": "JBP INTERCITY EX",
//           "arrivalTime": "11:40",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "11706",
//           "trainName": "REWA JBP EXP",
//           "arrivalTime": "20:30",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "CC",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "12061",
//           "trainName": "JBP JANSHATABDI",
//           "arrivalTime": "22:55",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC",
//               "EV"
//           ]
//       },
//       {
//           "trainNo": "12122",
//           "trainName": "M P S KRNTI EXP",
//           "arrivalTime": "07:45",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "1A",
//               "2A",
//               "3A",
//               "SL",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12159",
//           "trainName": "AMI JBP SF EXP",
//           "arrivalTime": "05:50",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12182",
//           "trainName": "DAYODAI EXP",
//           "arrivalTime": "08:30",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12188",
//           "trainName": "JBP GARIB RATH",
//           "arrivalTime": "05:00",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "12190",
//           "trainName": "MAHAKAUSHAL EXP",
//           "arrivalTime": "05:55",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "12191",
//           "trainName": "NZM JBP SF EXP",
//           "arrivalTime": "08:20",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A"
//           ]
//       },
//       {
//           "trainNo": "12193",
//           "trainName": "YPR JBP EXP",
//           "arrivalTime": "23:10",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": false,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "15205",
//           "trainName": "CHITRAKOOT EXP",
//           "arrivalTime": "05:40",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2A",
//               "3A",
//               "SL",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "20173",
//           "trainName": "VANDE BHARAT EXP",
//           "arrivalTime": "23:35",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "CC",
//               "EC"
//           ]
//       },
//       {
//           "trainNo": "20828",
//           "trainName": "HUMSAFAR EXP",
//           "arrivalTime": "15:25",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": false,
//               "wed": false,
//               "thu": true,
//               "fri": false,
//               "sat": false
//           },
//           "classes": [
//               "3A"
//           ]
//       },
//       {
//           "trainNo": "22173",
//           "trainName": "CAF JBP SF EXP",
//           "arrivalTime": "23:40",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": false,
//               "mon": false,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": false
//           },
//           "classes": [
//               "CC",
//               "2S"
//           ]
//       },
//       {
//           "trainNo": "22182",
//           "trainName": "NZM JBP SF EXP",
//           "arrivalTime": "07:25",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "3A",
//               "2A",
//               "1A",
//               "3E"
//           ]
//       },
//       {
//           "trainNo": "22190",
//           "trainName": "INTERCITY EXP",
//           "arrivalTime": "10:15",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "2S",
//               "CC"
//           ]
//       },
//       {
//           "trainNo": "22191",
//           "trainName": "INDB JBP SF EXP",
//           "arrivalTime": "05:35",
//           "departureTime": "Destination",
//           "runDays": {
//               "sun": true,
//               "mon": true,
//               "tue": true,
//               "wed": false,
//               "thu": true,
//               "fri": true,
//               "sat": true
//           },
//           "classes": [
//               "SL",
//               "1A",
//               "2A",
//               "3A",
//               "2S",
//               "3E"
//           ]
//       }
//   ]
// }
  const handleSubmit = async(e) => {
    e.preventDefault();


    // 🔧 Replace this with your actual fetch logic
    console.log("Fetching live status for station:", stationCode);
    const stcode = stationCode.split("-")[1];
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation",
      params: {
        stationCode: stcode,
      },
      headers: {
        // "X-RapidAPI-Key": "07cd06475bmshe4b7c90f93c9c80p1cda5fjsna3b003ac7d95",
        "X-RapidAPI-Key": "f5f35543dfmsh48fcdb9e6b6f345p16e4eejsn82174aa9f4b6",
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTData(response.data.data)
        return response.data;
    } catch (error) {
      console.error(error)

    }
  };
  const handleInputChange = (e) => {
    setStationCode(e.target.value);
    const value = e.target.value;
    setStationCode(value);

    if (value.length === 0) {
      setSuggestions([]);
      return;
    }

    // getting the suggestions
    const matches = data
      .filter((station) =>
        station.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5); 

    
    setSuggestions(matches.map((station) => `${station.name}-${station.code}`));
  };

  const handleSuggestionClick = (station) => {
    setStationCode(station);
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
     { !tdata && <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Trains From a Station
        </h2>

        {/* <div className="w-full relative">
          <label className="block text-gray-700 font-medium mb-1">
            Station Code
          </label>
          <input
            type="text"
            value={stationCode}
            // onChange={(e) => setStationCode(e.target.value)}
            onChange={handleInputChange}
            placeholder="e.g. Jabalpur-JBP"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
         
          <div>

         
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white/10 backdrop-blur-md  border border-gray-200 mt-1 w-full rounded-xl shadow-md ">
              {suggestions.map((station, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(station)}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {station}
                </li>
              ))}
            </ul>
          )}
           </div>
        </div> */}

        <StationInput 
          stationCode={stationCode}
          handleInputChange={handleInputChange}
          handleSuggestionClick={handleSuggestionClick}
          suggestions={suggestions}
          placeholder={"e.g. Jabalpur-JBP"}
          label={"Station Name"}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition"
        >
          Get Trains
        </button>
      </form>}

     {tdata &&  <TrainsFromStation data={tdata}/>}
    </div>
  );
}
