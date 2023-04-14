import { BiSearch } from 'react-icons/bi'
function Form ({ handleSubmit, handleCity, city }) {
  return (
    <form
      className='w-5/6 bg-[#1F1F21] m-auto h-14 rounded-full  flex items-center'
      onSubmit={handleSubmit}
    >
      <BiSearch className='text-2xl ml-6 mr-3 text-[#ACABAE] ' />
      <input
        value={city}
        type='text'
        onChange={handleCity}
        className='bg-transparent border-none outline-none text-[#ACABAE] text-1xl w-full'
        placeholder='Ingresa una ciudad...'
      />
    </form>
  )
}
export default Form
