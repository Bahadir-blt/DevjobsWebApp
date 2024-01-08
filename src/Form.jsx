import '../src/Css/Home.css'
import '../src/Css/Detail.css'


 function Form (){


    return(
        <>
        <form className='inputLabel'>
               <img className='searchImage' src="\src\İmage\InputImage\003-search 2.svg" alt="" />
               <input type="text" className='filter' placeholder='Filter by title, companies, expertise… ' name="" id="" />


               <img className='locationImage' src="\src\İmage\InputImage\placeholder 2.svg" alt="" />
               <input   type="text " className='location' placeholder='Filter by location…' name="" id="" />

               <input type="checkbox" className='checkboxone' name="" id="" /> <label className='checkbox' >Full Time Only</label>
               <button className='headerSearchButton'>SEARCH</button>
            </form>
        </>
    )
}

 export default Form ;




