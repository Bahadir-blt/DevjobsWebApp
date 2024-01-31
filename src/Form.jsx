import '../src/Css/Home.css'
import '../src/Css/Detail.css'
import { useState } from 'react'



function Form() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }



    const companyData =
        [
            "Scoot",
            "Blogr",
            "Vector",
            "Office Lite",
            "Pod",
            "Creative",
            "Pomodro",
            "Maker",
            "Coffeeroasters",
            "Mastercraft",
            "Crowdfund",
            "Typemaster",
        ]

    const locationData = [
        "United Kingdom",
        "United States",
        "Russia",
        "Japan",
        "Germany",
        "Singapore",
        "New Zealand"
    ]

    return (
        <>
            <div className="inputLabel">
                <img className='searchImage' src="\src\İmage\InputImage\003-search 2.svg" />
                <input type='text' className='searchOne' placeholder='Filter by title, companies, expertise… ' list='filter' />
                <datalist id='filter' >
                    {companyData.map((op) => <option > {op}  </option>)}
                </datalist>
                <img className='locationImage' src="\src\İmage\InputImage\placeholder 2.svg" />
                <input type="text " className='location' placeholder='Filter by location…' list='filtertwo' />
                <datalist id='filtertwo' key={companyData} >
                    {locationData.map((op) => <option > {op}   </option>)}
                </datalist>

                <input type="checkbox" className='checkboxone' name="" id="" /> <label className='checkbox' >Full Time Only</label>
                <button className='headerSearchButton'>SEARCH</button>
            </div>

            {/* responsive part */}

            <div className="responsiveLabel">
                <input type='text' className='ressearchOne' placeholder='Filter by title...  ' list='filter' />
                <img className='responsivesearchImage' src="\src\İmage\ResponsiveInputImage\Group 5 Copy 2.svg" alt="" />
                <img onClick={toggleModal} className='responsivepathimage' src="\src\İmage\ResponsiveInputImage\Path.svg" />
           

 {modal && ( 
  <div className="modal">
  <div
   onClick={toggleModal}
   className="overlay"></div>
  <div  className="modalContent">
  <img className='locationModalImage' src="\src\İmage\InputImage\placeholder 2.svg" />
                <input type="text " className='locationModal' placeholder='Filter by location…' list='filtertwo' />
                <datalist id='filtertwo' key={companyData} >
                    {locationData.map((op) => <option > {op}   </option>)}
                </datalist>
                <input type="checkbox" className='modalcheckboxone' name="" id="" /> <label className='modalcheckbox' >Full Time Only</label>
                <button className='modalSearchButton'>SEARCH</button>
  </div>
 
 </div>
 )}

         
           
            </div>

        </>
    )
}

export default Form;




