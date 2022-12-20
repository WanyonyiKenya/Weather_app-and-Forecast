import { Accordion, AccordionItem,AccordionItemButton,AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forecast.css'


const WEEK = ['Monday',  'Tuesday', 'Wednesday', 'Thursday', 'Firday', 'Saturday','Sunday']

const foreCast = ({data}) => {
    const dayOfWeek  = new Date().getDay()
    const foreCastDays = WEEK.slice(dayOfWeek, WEEK.length).concat(WEEK.slice(0, dayOfWeek))
 
  return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item, i)=> (
                <AccordionItem key={i}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            
                            <div className="daily_item">
                                <img
                                    alt="weather"
                                    className="icon_small"
                                    src={`icons/${item.weather[0].icon}.png`}
                                />
                                <label className="day">{foreCastDays[i]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min_max">{Math.round(item.main.temp_min)}°C /{Math.round(item.main.temp_max)}°C </label>

                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="day_details">
                            <div className="daily_details_item">
                                <label>Pressure</label>
                                <label>{item.main.pressure} hPa</label>
                            </div>
                            <div className="daily_details_item">
                                <label>Humidity</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className="daily_details_item">
                                <label>Clouds</label>
                                <label>{item.clouds.all} %S</label>
                            </div>
                            <div className="daily_details_item">
                                <label>Wind-Speed</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className="daily_details_item">
                                <label>Sea_level</label>
                                <label>{item.main.sea_level} m</label>
                            </div>
                            <div className="daily_details_item">
                                <label>Feels Like</label>
                                <label>{Math.round(item.main.feels_like)} °C</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
          
        </Accordion>
    </>
  )
}

export default foreCast