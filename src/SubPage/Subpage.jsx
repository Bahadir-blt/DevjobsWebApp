import '../Css/Detail.css'



export default function Subpage() {
    return (
        <>
            <div className="detailPageContainer">
                
                <span className='scootText'>Scoot   <h4 className='websiteAdress'>scoot.com</h4> <button className='companyButton'><p>Company Site</p></button>
                </span> <img className='scoutLogo' src="src\İmage\DetailPage\DetailPageLogo\ScoutBigLogo.svg" alt="" />
                <div className="textcontainer">
                    <p className='minute'>1w ago  <img className='contract' src="\src\İmage\Logos\point.svg" alt="" /> Part Time  </p>
                    <p className='detailPosition'>Senior Software Engineer</p> <button className='detailButtonOne'>Apply Now</button>
                    <p className='detailLocation' >United Kingdom</p>
                    <p className='detailTextOne'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    <p className='requirements'>Requirements</p>
                    <p className='requirementsDetail' > Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                    <span className='detailExample'>
                        <img className='detailOvalLogo' src="\src\İmage\DetailPage\DetailPageLogo\Oval (1).svg" alt="" /><p className='detailText'>Morbi interdum mollis sapien. Sed</p></span>
                    <span className='detailExample'>
                        <img className='detailOvalLogo' src="\src\İmage\DetailPage\DetailPageLogo\Oval (1).svg" alt="" /><p className='detailText'>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</p></span>

                    <span className='detailExample'>
                        <img className='detailOvalLogo' src="\src\İmage\DetailPage\DetailPageLogo\Oval (1).svg" alt="" /><p className='detailText'>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</p></span>
                    <span className='detailExample'>
                        <img className='detailOvalLogo' src="\src\İmage\DetailPage\DetailPageLogo\Oval (1).svg" alt="" /><p className='detailText'>Morbi interdum mollis sapien. Sed</p></span>
                
                <p className='willDo'>What You Will Do</p>
                <p className='willDoExp' >Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
           
                 <p className='numberOneText'><span className='numberOne' >1</span>Morbi interdum mollis sapien. Sed</p>
                 <p className='numberOneText'><span className='numberOne' >2</span>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</p>
                 <p className='numberOneText'><span className='numberOne' >3</span>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</p>
                 <p className='numberOneText'><span className='numberOne' >4</span>Morbi interdum mollis sapien. Sed</p>
                
                
                </div>

           
            </div>
            <div className="applynow">
              <span className='applyNowExp'>Senior Software Engineer</span>  <button className='detailButtonTwo'>Apply Now</button>
             <br /> <span className='digital'>So Digital Inc.</span>
              </div>
        </>
    )
}