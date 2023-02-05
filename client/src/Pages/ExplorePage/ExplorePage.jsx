import Header from '../../Components/Lending/Header/Header'
import Copyright from "../../Components/Lending/Copyright/";
import exploreTable from "../../assets/img/explore__table.png"
import './ExplorePage.css'

const ExplorePage = () => {
    const year = new Date().getFullYear()
    return (
     <>
         <Header />
          <div className="explorePage__wrapper container">
          <div className="explorePage">
              <div className="explorePage__title">
                  <h1 className="explorePage__title">Исследование</h1>
              </div>
              <div className="explorePage__content">
                  <p className="explore__descr">В современном обществе существует проблема профориентации, команда проекта пытается её решить! Мы подготовили профориентационный тест, который поможет определиться с наиболее подходящей для вас профессией и помочьв её освоении.</p>
                  <div className="exolore__table">
                      <img src={exploreTable} alt="explore table"/>
                  </div>
              </div>
          </div>
         <div className="CopyrightExplore">
             <p>&copy; PROFITEST {year}</p>
         </div>
      </div>
     </>
    );
}

export default ExplorePage;