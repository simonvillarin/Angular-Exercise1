// City Directory
interface City {
  cityName: string;
  country: string;
  population: number;
}

const citiesLocal = localStorage.getItem("cities");
let cities: any[];

if (citiesLocal) {
  cities = JSON.parse(citiesLocal);
} else {
  cities = [];
}

const handleSubmit = (e: Event) => {
  e.preventDefault();

  const cityName = document.getElementById("cityName") as HTMLInputElement;
  const country = document.getElementById("country") as HTMLInputElement;
  const population = document.getElementById("population") as HTMLInputElement;

  let city = {
    cityName: cityName.value,
    country: country.value,
    population: JSON.parse(population.value),
  };

  cities.push(city);
  localStorage.setItem("cities", JSON.stringify(cities));

  cityName.value = "";
  country.value = "";
  population.value = "";

  displayCities();
};

const displayCities = () => {
  const tbody = document.getElementById("tbody");

  const citiesLocal = localStorage.getItem("cities");
  if (citiesLocal) {
    const cities = JSON.parse(citiesLocal);

    if (tbody) {
      while (tbody.hasChildNodes() && tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    }

    cities.forEach((city: any) => {
      const tr = document.createElement("tr");

      const tdCityName = document.createElement("td");
      tdCityName.innerText = city.cityName;
      tr.appendChild(tdCityName);

      const tdCountry = document.createElement("td");
      tdCountry.innerText = city.country;
      tr.appendChild(tdCountry);

      const tdPopulation = document.createElement("td");
      tdPopulation.innerText = city.population;
      tr.appendChild(tdPopulation);

      tbody?.appendChild(tr);
    });
  }
};

const handleSearch = () => {
  const searchInput = document.getElementById("search") as HTMLInputElement;

  if (searchInput.value != "") {
    const filteredCities = cities.filter(
      (city) =>
        city.cityName.toLowerCase().includes(searchInput.value.toLowerCase()) ||
        city.country.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    const tbody = document.getElementById("tbody");

    if (tbody) {
      while (tbody.hasChildNodes() && tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    }

    filteredCities.forEach((city: any) => {
      const tr = document.createElement("tr");

      const tdCityName = document.createElement("td");
      tdCityName.innerText = city.cityName;
      tr.appendChild(tdCityName);

      const tdCountry = document.createElement("td");
      tdCountry.innerText = city.country;
      tr.appendChild(tdCountry);

      const tdPopulation = document.createElement("td");
      tdPopulation.innerText = city.population;
      tr.appendChild(tdPopulation);

      tbody?.appendChild(tr);
    });
  } else {
    displayCities();
  }
};

displayCities();

// ISBN – 10 Validation
const validateISBN = (isbn: string): boolean => {
  if (isbn.length == 10) {
    let sum: number = 0;
    for (let i = 0; i < isbn.length; i++) {
      if (isbn[i] === "X") {
        if (i === 9) {
          sum += 10;
        } else {
          return false;
        }
      } else {
        sum += parseInt(isbn[i]) * (i + 1);
      }
    }
    return sum % 11 == 0 ? true : false;
  }
  return false;
};

// Example
console.log(validateISBN("1112223339")); // true
console.log(validateISBN("111222333")); // false
console.log(validateISBN("1112223339X")); // false
console.log(validateISBN("1234554321")); // true
console.log(validateISBN("1234512345")); // false
console.log(validateISBN("048665088X")); // false
console.log(validateISBN("X123456788")); // false

// Change it up
const transformString = (str: string): string => {
  let result = "";
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "y",
    "z",
  ];
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (alphabet.includes(char.toLowerCase())) {
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === char.toLowerCase()) {
          let ch = alphabet[i + 1];
          if (char === "z" || char === "Z") {
            ch = alphabet[0];
          }
          if (vowels.includes(ch)) {
            result += ch.toUpperCase();
          } else {
            result += ch;
          }
        }
      }
    } else {
      result += char;
    }
  }
  return result;
};

// Example
console.log(transformString("Cat30"));

// Moving zeroes to the end
const moveZeros = (arr: any[]): any[] => {
  let newArr: any[] = [];
  let zeroCount: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    newArr.push(0);
  }

  return newArr;
};

// Example
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
