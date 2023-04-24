import { useState ,useEffect } from "react"

import{copy , linkIcon,loader , tick} from '../assets'
import { useLazyGetSummeryQuery } from "../services/article.js";

const Demo = () => {
useEffect(()=>{
  const articleFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

  if(articleFromLocalStorage){
    setAllarticle(articleFromLocalStorage)
  }
},[])

const [allAtricle,setAllarticle] =useState([])
  const [article, setArticle] = useState({url:"" , summary:""});
const[getSummery ,{isFetching ,error}] =useLazyGetSummeryQuery();
const[copied ,setCopy] =useState("")
const handleCopy = (copyUrl) =>{
  setCopy(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => {
      setCopy(false)
    }, 3000);
}
const handleSubmit = async(e)=>{
  e.preventDefault();
  // console.log(article.url)

 const {data } = await getSummery({articleUrl:article.url}) ;
 if(data?.summary){
  const newArticle ={...article ,summary: data.summary}
  setArticle(newArticle)

  // for show in history
const updatedAllArticles = [newArticle,...allAtricle]
setAllarticle(updatedAllArticles);
localStorage.setItem('articles',JSON.stringify(allAtricle))
  console.log(newArticle)
 }
}


  return (
   <section className="mt-16 w-full max-w-xl" >
{/* search */}
<div className="flex flex-col w-full gap-2">
<form className="relative flex justify-center items-center" 
onSubmit={handleSubmit}
>
  <img src={linkIcon} alt="link_icon" 
  className="absolute left-0 my-2 ml-3 w-5" />
<input type="url" placeholder="Enter a URL" value={article.url} 
onChange={(e)=>setArticle({...article, url:e.target.value})}  required className="url_input peer"/>
<button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"> ↵ </button>
</form>

{/* browser url history */}
<div className="flex flex-col gap-1 max-h-60 overflow-auto">
  {allAtricle.map((item,i) =>(
    <div  key={`link-${i}`} className="link_card" onClick={()=>setArticle(item)} >
<div className="copy_btn" onClick={()=>{handleCopy(item.url)}}>
  <img src={copied===item.url ?tick :copy } alt="copy" className="w-[40% h-[40%] object-contain"  />
</div>
<p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>

    </div>
  ))}
</div>

</div>
{/*Display Results  */}
<div className="my-10 max-w-full flex justify-center items-center">
  {isFetching?(<img src={loader} className="w-20 h-20 object-contain" />):error?(<p className="font-inter font-bold text-black text-center">Well , that wasn't suppose to happned <br/> <span className="font-satoshi font-normal text-gray-700">{error?.data?.error}</span> </p>):
  
  (article.summary && ( <div className="flex flex-col gap-3">
<h2 className="font-satoshi font-bold text-gray-600 text-xl">Article <span className="blue_gradient">Summary</span></h2>
<div className="summary_box">
  <p className="font-inter text-sm text-gray-700">{article.summary}</p>
</div>
  </div>))}
</div>

   </section>
  )
}
// ↩
export default Demo