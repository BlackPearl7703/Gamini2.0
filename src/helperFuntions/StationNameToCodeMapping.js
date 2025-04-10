import {data} from "../Data/StationName&Code";

export function helper(station_name)
{
    let minDistance = 1000000;
    let station_info = "not_found";
     for(let i=0;i<data.length;i++)
     {

        if(minDistance(data[i].station_name.toLowerCase(),station_name.toLowerCase())<minDistance)
        {
            minDistance = minDistance(data[i].station_name.toLowerCase(),station_name.toLowerCase());
            station_info=`${data[i].station_name} ${data[i].station_code}`;
        }
     }

     return station_info;
}

function minDistance(word1, word2) {
    const n = word1.length;
    const m = word2.length;
  
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  
    // Fill last column
    for (let i = 0; i <= n; i++) {
      dp[i][m] = n - i;
    }
  
    // Fill last row
    for (let j = 0; j <= m; j++) {
      dp[n][j] = m - j;
    }
  
    // Fill the rest of dp table
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        if (word1[i] === word2[j]) {
          dp[i][j] = dp[i + 1][j + 1];
        } else {
          dp[i][j] = Math.min(
            1 + dp[i][j + 1],     // Insert
            1 + dp[i + 1][j],     // Delete
            1 + dp[i + 1][j + 1]  // Replace
          );
        }
      }
    }
  
    return dp[0][0];
  }
  