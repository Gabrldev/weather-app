import Card from './Card'

const Cards = ({ weather, close }) => {
  return (
    <div className='w-5/6  m-auto mt-10 h-auto flex flex-wrap gap-7 justify-center'>
      {weather.map((item) => {
        return (
          <Card
            icon={item.weather[0].main}
            key={item.name}
            name={item.name}
            temp={item.main.temp}
            tempMax={item.main.temp_max}
            tempMin={item.main.temp_min}
            close={close}
            humidity={item.main.humidity}
            hind={item.wind.speed}
          />
        )
      })}
    </div>

  )
}
export default Cards
