function start() {
    const totalDays = 7;
    const startDate = new Date();
    const weatherLogs = [];
  
    for (let i = 0; i < totalDays; i++) {
      const log = generateDailyWeather(i, startDate);
      weatherLogs.push(log);
    }
  
    displayWeatherLogs(weatherLogs);
    displaySummary(weatherLogs, startDate);
  }
  
  // -----------------------
  // Weather Generation
  // -----------------------
  
  function generateDailyWeather(dayOffset, baseDate) {
    const fahrenheit = getRandomTemperature();
    const celsius = convertToCelsius(fahrenheit);
    const category = categorizeTemperature(celsius);
    const date = new Date(baseDate.getTime() + dayOffset * 86400000);
    const dayOfWeek = date.getDay();
  
    return {
      dayOfWeek,
      fahrenheit,
      celsius,
      category
    };
  }
  
  function getRandomTemperature() {
    return Math.floor(Math.random() * 70) + 30;
  }
  
  function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function categorizeTemperature(celsius) {
    if (celsius < 10) {
      return "Cold";
    } else if (celsius < 25) {
      return "Warm";
    } else {
      return "Hot";
    }
  }
  
  // -----------------------
  // Display Functions
  // -----------------------
  
  function displayWeatherLogs(logs) {
    for (let i = 0; i < logs.length; i++) {
      const log = logs[i];
      const dayName = getDayName(log.dayOfWeek);
  
      console.log(`${dayName}: ${log.fahrenheit}°F / ${log.celsius.toFixed(1)}°C - ${log.category}`);
  
      if (isWeekend(log.dayOfWeek)) {
        console.log("  (Weekend logging!)");
      }
  
      if (isLarger(log.fahrenheit, 90)) {
        console.log("  ⚠️ It's a hot one today!");
      }
    }
  }
  
  function getDayName(dayIndex) {
    switch(dayIndex) {
      case 0: return "Sunday";
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
    }
  }
  
  function isWeekend(dayIndex) {
    return dayIndex === 0 || dayIndex === 6;
  }
  
  function isLarger(numOne, numTwo) {
    return numOne > numTwo;
  }
  
  // -----------------------
  // Summary & Metadata
  // -----------------------
  
  function displaySummary(logs, startDate) {
    const user = createUser("John", "Q.", "Doe");
    const summary = {
      user: `${user.firstName} ${user.lastName}`,
      totalEntries: logs.length,
      dateStarted: startDate.toString(),
      weekendDays: ["Saturday", "Sunday"]
    };
  
    console.log("\n--- Summary ---");
    for (let key in summary) {
      console.log(`${key}: ${summary[key]}`);
    }
  }
  
  function createUser(first, middle, last) {
    return {
      firstName: first,
      middleName: middle,
      lastName: last
    };
  }
  
  // -----------------------
  // Begin the Program
  // -----------------------
  
  start();