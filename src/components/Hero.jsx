import {logo} from '../assets'


const Hero = () => {
  return (
   <header className='w-full flex justify-center mb-10 pt-3 flex-col'>
<nav className='flex justify-between items-center  w-full '>
<img src={logo} alt="summ_logo"  className='w-28 object-contain'/>
<button type='button' onClick={()=>{window.open("https://www.google.com")}} className='black_btn'>GitHub</button>
</nav>
<h1 className="head_text">Summarize Article with <br className='max-md:hidden' /><span className='orange_gradient'>Open-Ai Chat GPT-4</span></h1>

<h2 className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit odit fugiat aliquam mollitia sed! Ullam provident cumque voluptate est facere alias deserunt nostrum!</h2>
   </header>
  )
}

export default Hero