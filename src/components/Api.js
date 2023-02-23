import React from "react";
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(new Date(date).getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

/*export async function submitAPI(formData) {
    try {
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error(error);
      return false;
    }
  }*/
  export async function submitAPI(formData) {
    return true; // Return true to indicate successful submission
  }
  
  
