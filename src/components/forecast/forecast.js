import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

    console.log(forecastDays)

    return (
        <>
            <label className="title">Weekly Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="weather-icon-forecast" />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)} / {' '} {Math.round(item.main.temp_max)}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-item">
                                    <label>Pressure: </label>
                                    <label>{Math.round(item.main.pressure)} mb</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Humidity: </label>
                                    <label>{Math.round(item.main.humidity)} %</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Clouds: </label>
                                    <label>{Math.round(item.clouds.all)} %</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Wind speed:</label>
                                    <label>{Math.round(item.wind.speed)} mph</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Feels like: </label>
                                    <label>{Math.round(item.main.feels_like)} °F</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    )
}

export default Forecast;