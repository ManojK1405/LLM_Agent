import requests
import os

def get_weather(city: str) -> str:
    api_key = os.getenv("WEATHER_API_KEY")

    url = (
        "https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&units=metric&appid={api_key}"
    )

    res = requests.get(url).json()

    if res.get("cod") != 200:
        return f"Could not fetch weather for {city}"

    temp = res["main"]["temp"]
    desc = res["weather"][0]["description"]

    return f"The weather in {city} is {temp}°C with {desc}."
