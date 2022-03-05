import style from '../../styles/Habilidades.module.css';

function Habilidades() {
   return (
      <section className={style.conteiner_habilidades }>
         <h1>
            Habilidades
         </h1>
         <div className={style.habilidades_image_pai }>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
               />
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
               />
            </div>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
               />
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
               />
            </div>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
               />
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
               />
            </div>
            <div className={style.habilidades_image_filho} >
               <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
               />
            </div> 
         </div>
      </section>
   )
}

export default Habilidades;