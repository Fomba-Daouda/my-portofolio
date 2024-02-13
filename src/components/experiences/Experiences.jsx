import React from 'react'
import './experiences.css'
import { DiSpark} from 'react-icons/di'
import { SiMysql, SiScikitlearn,SiNumpy,SiGraphql,SiPandas,SiTensorflow,SiKeras,SiPowerbi,SiR ,SiLooker,SiJupyter, SiGooglecloud,SiRstudio,SiLinux , SiPython,SiMicrosoftoffice,SiDocker,SiGit} from 'react-icons/si'

const Experiences = () => {
  return (
    <section id='experiences'>
      <h2>Mes différentes compétences</h2>
      <div className='container experience_container'>
      <div className='experience_lo'>
          <h3>Langages et Outils</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <SiPython className='experience_details-icon-angular'></SiPython>
              <div>
                <h4>Python</h4>
                <small>4 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
            <SiR className='experience_details-icon-angular'></SiR>
              <div>
                <h4> R</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
            <SiMysql className='experience_details-icon-angular'></SiMysql>
              <div>
                <div>
                  <h4>SQL</h4>
                </div>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMicrosoftoffice className='experience_details-icon-angular'></SiMicrosoftoffice>
              <div>
                <h4> Suite Office</h4>
                <small> 2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiDocker className='experience_details-icon-react'></SiDocker>
              <div>
                <h4>Docker </h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiGit className='experience_details-icon-react'></SiGit>
              <div>
                <h4> Git/Github</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
          </div>
        </div>

        {/* End Languages et Outils */}
        <div className='experience_ml'>
          <h3>Machine Learnig</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <SiScikitlearn className='experience_details-icon-angular'></SiScikitlearn>
              <div>
                <h4>Sklearn</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
            <SiNumpy className='experience_details-icon-angular'></SiNumpy>
              <div>
                <h4> Numpy</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
            <SiPandas className='experience_details-icon-angular'></SiPandas>
              <div>
                <div>
                  <h4>Pandas</h4>
                </div>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiGraphql className='experience_details-icon-angular'></SiGraphql>
              <div>
                <h4> Matplotlib</h4>
                <small> 2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiTensorflow className='experience_details-icon-react'></SiTensorflow>
              <div>
                <h4>Tensorflow </h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiKeras className='experience_details-icon-react'></SiKeras>
              <div>
                <h4> Keras</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <DiSpark className='experience_details-icon-react'></DiSpark>
              <div>
                <h4> Spark</h4>
                <small>1 ans d'exp.</small>
              </div>
            </article>
          </div>
        </div>

        {/* End Machine Learning */}
        <div className='experience_data_visu'>
          <h3>Data Visualisation</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <SiLooker className='experience_details-icon-angular'></SiLooker>
              <div>
                <h4>Looker Studio</h4>
                <small>1 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
            <SiR  className='experience_details-icon-angular'></SiR >
              <div>
                <h4> R-shiny </h4>
                <small> 1 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
            <SiPowerbi  className='experience_details-icon-angular'></SiPowerbi >
              <div>
                <div>
                  <h4>PowerBI</h4>
                </div>
                <small>1 ans d'exp.</small>
              </div>
            </article>
          </div>
        </div>
        {/* End Data Visualisation*/}

        <div className='experience_env'>
          <h3>Environnement</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <SiJupyter className='experience_details-icon-nodeJS'></SiJupyter>
              <div>
                <h4>Jupiter Notebook</h4>
                <small>4 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiGooglecloud className='experience_details-icon-mongoDB'></SiGooglecloud>
              <div>
                <h4>GCP</h4>
                <small>1 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiRstudio className='experience_details-icon-php'></SiRstudio>
              <div>
                <h4>Rstudio</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiLinux className='experience_details-icon-sql'></SiLinux>
              <div>
                <h4>Linux</h4>
                <small>2 ans d'exp.</small>
              </div>
            </article>
          </div>
               
        </div>
      </div>
    </section>
  )
}

export default Experiences
