import clear from '../assets/clear.png'
import clouds from '../assets/clouds.png'
import drizzle from '../assets/drizzle.png'
import mist from '../assets/mist.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import hummidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import Thunderstorm from '../assets/Thunderstorm.png'
const Card = ({
  key,
  name,
  temp,
  tempMax,
  tempMin,
  close,
  icon,
  humidity,
  hind
}) => {
  temp = Math.round(temp)
  tempMax = Math.round(tempMax)
  tempMin = Math.round(tempMin)

  switch (icon) {
    case 'Clouds':
      icon = clouds
      break
    case 'Clear':
      icon = clear
      break
    case 'Rain':
      icon = rain
      break
    case 'Drizzle':
      icon = drizzle
      break
    case 'Snow':
      icon = snow
      break
    case 'Mist':
      icon = mist
      break
    case 'Thunderstorm':
      icon = Thunderstorm
  }

  return (
    <div
      key={key}
      className='w-80 h-80 bg-[#d9d9d908] flex justify-around flex-col items-center backdrop-blur-lg rounded-xl border border-white/10 relative hover:scale-105 transition duration-300 ease-in'
    >
      <button onClick={() => close(name)} className='absolute top-2 right-4 text-2xl cursor-pointer'>x</button>
      <header>
        <h1 className='text-3xl text-white/70'>{name}</h1>
      </header>
      <img src={icon} className='w-28' />
      <h3 className='text-5xl'>{temp}°</h3>
      <section className='flex gap-4'>
        <h3>Max:{tempMax}°</h3>
        <h3>Min:{tempMin}°</h3>
      </section>
      <footer className='w-full justify-between flex px-8'>
        <div className='flex gap-2 items-center'>
          <img src={hummidity} className='w-[50%] h-[50%]' />
          <h5>{humidity}</h5>
        </div>
        <div className='flex gap-2 items-center'>
          <img src={wind} className='w-[50%] h-[50%]' />
          <h5>{hind}</h5>
        </div>

      </footer>
    </div>
  )
}
export default Card
