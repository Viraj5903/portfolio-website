import { WeatherData } from "@/data/interfaces"; // Importing the WeatherData interface for type safety.
import Image from "next/image"; // Import the Image component from Next.js for optimized image handling
import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects.

/*
The OpenWeather API provides weather data for locations worldwide,
allowing developers to integrate real-time weather information
into their applications.
*/

/**
 * WeatherInfo component fetches and displays weather information.
 * It attempts to get the user's current location and fetch weather data
 * based on that location using the OpenWeather API. 
 * If location access is denied or unavailable,
 * it defaults to fetching weather data for Montreal.
 *
 * @returns {JSX.Element} The rendered WeatherInfo component displaying weather data or an error state.
 */
const WeatherInfo = (): JSX.Element => {
    // State to hold fetched weather data, initialized to null.
    const [weather, setWeather] = useState<WeatherData | null>(null);
    // State to track error status, initialized to false.
    const [error, setError] = useState<boolean>(false);

    /**
     * Fetch weather data from the OpenWeather API.
     * The function accepts optional latitude and longitude parameters.
     * If coordinates are provided, it fetches weather data for that location.
     * If not, it defaults to fetching weather data for Montreal.
     *
     * @param {number} [lat] - Latitude for the location.
     * @param {number} [lon] - Longitude for the location.
     */
    const fetchWeather = async (lat?: number, lon?: number) => {
        const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY; // Retrieve the API key from environment variables.
        let url: string; // Variable to hold the API endpoint URL.

        // Determine the API endpoint based on the presence of latitude and longitude.
        if (lat !== undefined && lon !== undefined) {
            // Fetch weather by coordinates.
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        } else {
            // Fetch weather for Montreal by default.
            url = `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${API_KEY}&units=metric`;
        }

        try {
            const response = await fetch(url); // Make the API call to fetch weather data.
            if (!response.ok) {
                throw new Error("Failed to fetch weather data"); // Throw an error if the response is not OK.
            }
            const data: WeatherData = await response.json(); // Parse the JSON response into WeatherData type.
            setWeather(data); // Update the state with the fetched weather data.
        } catch (error) {
            console.error(error); // Log any errors that occur during the fetch.
            setError(true); // Update the error state to true if an error occurs.
        }
    };

    /**
     * useEffect Hook to fetch weather data based on the user's current location.
     * 
     * This effect runs once when the component mounts. It first resets any previous error
     * state by setting it to false. It then defines a function, `getLocation`, which utilizes
     * the Geolocation API to attempt to get the user's current coordinates (latitude and 
     * longitude).
     *
     * If the user grants access to their location, the application fetches weather data 
     * from the OpenWeather API using the retrieved coordinates. However, if access is 
     * denied or if the Geolocation API is not supported, the component defaults to fetching
     * weather data for Montreal.
     *
     * This ensures that the user is provided with relevant weather information, whether 
     * their location can be accessed or not.
     */
    useEffect(() => {
        setError(false); // Reset the error state before fetching new data.

        /**
         * Function to get the user's current location using the Geolocation API.
         * If the user allows access, it fetches weather data based on the coordinates.
         * If access is denied or unsupported, it defaults to fetching weather for Montreal.
         */
        const getLocation = () => {
            if (navigator.geolocation) {
                // Get user's current location.
                navigator.geolocation.getCurrentPosition(
                    // If location access is allowed, fetch weather data based on the coordinates.
                    (position) => {
                        const { latitude, longitude } = position.coords; // Extract latitude and longitude from the position.

                        // Testing:
                        // console.log(`latitude = ${latitude}, longitude = ${longitude}`); // Log the latitude and longitude coordinates for debugging.

                        fetchWeather(latitude, longitude); // Fetch weather data based on user's location.
                    },
                    // If location access is denied or unsupported, fetch weather for Montreal.
                    () => {
                        console.warn("Location is off."); // Log a warning if location access is denied.
                        fetchWeather(); // If user denies location access, fetch weather for Montreal.
                    }
                );
            } else {
                // If geolocation is not supported, fetch weather for Montreal.
                fetchWeather();
            }
        };

        getLocation(); // Call the function to get the user's location.
    }, []); // Empty dependency array: runs once on component mount.

    return (
        /* Container for the WeatherInfo component. */
        <div className="h-full">
            {error ? ( // Conditional rendering based on error state.
                // Uncomment the following line to show an error image.
                // <Image src="images/weather-404.svg" alt="Error" width={50} height={50} className="h-hull" />
                null // Render nothing or an alternative UI if there is an error.
            ) : (
                weather && ( // Render weather data only if it has been fetched successfully.
                    <div className="flex flex-col justify-center items-center"> {/* Centered layout for weather info. */}
                        <div className="flex flex-row items-center gap-1"> {/* Row for weather icon and temperature. */}
                            {/* Display weather icon. The alt text is the weather condition. */}
                            <Image
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].main}
                                width={25}
                                height={25}
                                className="flex-1 h-full"
                            />
                            <p className="font-bold text-base flex-1">{weather.main.temp.toFixed(0)}&deg;C</p> {/* Display temperature in degrees Celsius. */}
                        </div>
                        <p className="text-xs flex-1">{weather.name}</p> {/* Display city name. */}
                    </div>
                )
            )}
        </div>
    );
};

export default WeatherInfo; // Export the WeatherInfo component as the default export of the module.
